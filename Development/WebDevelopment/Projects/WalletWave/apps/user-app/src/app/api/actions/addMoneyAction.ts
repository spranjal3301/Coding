"use server";
import db from "@repo/db";
import { z } from "zod";
import { revalidatePath } from "next/cache";
import getUserDetail from "./getUserDetail";

const schema = z.object({
  email: z.string().email(),
  amount: z.number().positive(),
  Providerbank: z.string(),
});

export async function addMoneyAction(
  fprevState: { message: string },
  formData: any
) {
  const user = await getUserDetail();
  const data = {
    email: formData.get("email"),
    amount: Number(formData.get("amount")),
    Providerbank: formData.get("Providerbank"),
  };
  try {
    //    console.log(data);
    if (user?.user?.email !== data.email) {
      throw new Error("Email Validation failed");
    }

    const parse = schema.safeParse(data);

    if (!parse.success) {
      throw new Error("Invalid Credentials");
    }

    const response = await db.$transaction(async (txdb) => {
      const userDetail = await txdb.user.findUnique({
        where: {
          email: data.email,
        },
      });
      if (!userDetail?.id) throw new Error("User not found");

      const tHist = await txdb.transactionsHistory.create({
        data: {
          userId: userDetail?.id,
          amount: data.amount,
          status: "Processing",
          type: "Deposit",
          toUserName: data.Providerbank,
        },
      });
      if (!tHist) throw new Error("Could not fetch balance");

      const upsertBalance = await txdb.balance.upsert({
        where: {
          userId: userDetail?.id,
        },
        update: {
          amount: {
            increment: data.amount,
          },
        },
        create: {
          userId: userDetail?.id,
          amount: data.amount, // This is the default value you mentioned
        },
      });

      if (!upsertBalance) throw new Error("Could not fetch balance");

      return tHist;
    });

    await db.transactionsHistory.update({
      where: {
        id: response.id,
      },
      data: {
        status: "Success",
      },
    });

    revalidatePath("/home");
    return {
      message: "Money added successfully",
      error: false,
    };
  } catch (error: any) {
    const userDetail = await db.user.findUnique({
      where: {
        email: user?.user?.email || "",
      },
    });

    if (userDetail?.id) {
      await db.transactionsHistory.create({
        data: {
          userId: userDetail?.id,
          amount: data.amount,
          status: "Declined",
          type: "Deposit",
          toUserName: data.Providerbank,
        },
      });
    }

    return {
      message: error?.message || "error while adding money",
      error: true,
    };
  }
}
