"use server"
import db from "@repo/db"




export default async function getBalance(email: string) {
  try {
    const userDetail = await db.user.findUnique({
        where: {
            email
        }
    });
    if(!userDetail?.id) 
        throw new Error("User not found");
    
    const upsertBalance = await db.balance.upsert({
        where: {
          userId: userDetail?.id,
        },
        update: {}, // We don't update anything if the record exists
        create: {
          userId: userDetail?.id,
          amount: 1000, // This is the default value you mentioned
        },
      });
    
    if(!upsertBalance) 
        throw new Error("Could not fetch balance");

    return {
        balance:  upsertBalance.amount,
        error: null
    }
    
  } catch (error) {
    console.error(error);
    return {
        balance: 0,
        error: "Could not fetch balance"
    }
  }
}