"use server";
import db from "@repo/db";
import getUserDetail from "./getUserDetail";
import { revalidatePath } from "next/cache";



export default async function sendMoney(to: string, amount: number) {
    const UserDetail = await getUserDetail();
    const from = UserDetail?.user?.email;
    if (!from) {
        return {
            error: true,
            message: 'Session expired'
        }
    }
    if (!amount || amount <= 0) {
        return {
            error: true,
            message: 'Invalid amount'
        }
    }
    const fromUser = await db.user.findUnique({
        where: {
            email: from
        }
    });
    const toUser = await db.user.findUnique({
        where: {
            id: to
        }
    });
    try {
        if (!fromUser?.id) {
            throw new Error('User not found');
        }
        if (!toUser?.id) {
            throw new Error('Sender not found');
        }
        
        const tHistory = await db.$transaction(async (txdb)=>{
            const fromBalance = await txdb.balance.findFirst({
                where: {
                    userId: fromUser.id
                }
            });
            if (!fromBalance || fromBalance.amount < amount) {
                throw new Error('Insufficient funds');
            }
            const tHistfrom = await txdb.transactionsHistory.create({
                data: {
                  userId: fromUser?.id,
                  amount: amount,
                  status: "Processing",
                  type: "Withdraw",
                  toUserName: toUser?.name || 'Unknown',
                  toUserImage: toUser?.image || null,
                },
              });

              await txdb.balance.update({
                where: { 
                    userId: fromUser.id 
                },
                data: { 
                    amount: { decrement: amount } 
                },
              });
    
              await txdb.balance.update({
                where: { userId: toUser.id },
                data: { amount: { increment: amount } },
              });
            

            return tHistfrom;
        });
        await db.transactionsHistory.update({
            where: {
                id: tHistory.id
            },
            data: {
                status: 'Success'
            }    
        });
        await db.transactionsHistory.create({
                data: {
                  userId: toUser?.id,
                  amount: amount,
                  status: "Success",
                  type: "Deposit",
                  toUserName: fromUser?.name || 'Unknown',
                  toUserImage: fromUser?.image || null,
                },
            });

        revalidatePath("/home");
        return {
            error: false,
            message: `Successfully sent $${amount} to user ${toUser.name}`
        }
        
    } catch (error: any) {
        if(fromUser?.id) {
            await db.transactionsHistory.create({
                data: {
                userId: fromUser?.id,
                amount: amount,
                status: "Declined",
                type: "Withdraw",
                toUserName: toUser?.name || 'Unknown',
                toUserImage: toUser?.image || null,
                },
            });
        }    
        return {
            error: true,
            message: error?.message || 'error while sending money'
        }
    }

}