import express from "express";
import { paymentInfo } from "@repo/types";
import db from "@repo/db"

const app = express();
const PORT=parseInt(process.env.PORT || "3003");
app.use(express.json());

app.post("/",async (req, res) => {
    const webHookSecret = req.body?.webHookSecret;
    const paymentInformation = {
        onRamptoken: req.body?.onRamptoken,
        userId: req.body?.userId,
        amount: req.body?.amount,
    };
  try {
    const { success, error } = paymentInfo.safeParse(paymentInformation);
    if (!success) {
      return res.status(400).json({
        message: `Invalid input: ${error}`,
        success:false,
      });
    }
    const transactionStatus=await db.onRampTransaction.findFirst({
        where:{
            token:paymentInformation.onRamptoken
        }
    })

    if(transactionStatus?.status!="Processing" || webHookSecret!=process.env.WEB_HOOK_SECRET){
        return res.status(400).json({
            message: `Invalid Request`,
            success:false,
          });
    }

    await db.$transaction([
        db.balance.update({
            where:{
                userId:Number(paymentInformation.userId)
            },
            data:{
                amount:{
                    increment:Number(paymentInformation.amount)
                }
            }
        }),
        db.onRampTransaction.update({
            where:{
                token:paymentInformation.onRamptoken
            },
            data:{
                status:"Success"
            }
        })
    ])

    return res.status(200).json({
        message:"Captured",
        success:true
    })

  } catch (error) {
    //?Failed Transaction
    db.onRampTransaction.update({
        where:{
            token:paymentInformation.onRamptoken
        },
        data:{
            status:"Failure"
        }
    })
    res.status(500).json({
        message: `Error in weebhook ${error}`,
        success:false,
    });
  }
});


app.listen(PORT,()=>{
    console.log(`WebHook is running on port ${PORT}`);
})
