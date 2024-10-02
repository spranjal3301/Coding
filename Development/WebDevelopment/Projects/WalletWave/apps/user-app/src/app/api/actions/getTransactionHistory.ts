import { revalidatePath } from "next/cache";
import getUserDetail from "./getUserDetail";
import db from '@repo/db';



export const getTransactionHistory = async ()=> {
  try {
    const session = await getUserDetail();
    if (!session) throw new Error("Session Expired");
    const userDetail = await db.user.findUnique({
        where: { email: session.user?.email || "" },
        select: { 

            TransactionsHistory: true 
        },
    });
    if (!userDetail) throw new Error("User not found");
    // console.log(userDetail);
    revalidatePath("/transactions");
    return { 
        transactions: userDetail.TransactionsHistory || [],
        error: false ,
        message: "Success"
        };


  } catch (error:any) {
    return { transactions: [], error: true , message: error?.message || "Internal Server Error"};
  }
};
