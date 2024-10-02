import express from "express";
import axios from "axios";
import {transferInfo}  from '@repo/types'


interface responseTypes{
    data:{
        message:string,
        success:boolean
    }
}



const app=express();
const PORT=parseInt(process.env.PORT || "8081");
app.use(express.json());

app.post("/",async(req,res)=>{
    try {
        const transferInformation={
            onRamptoken: req.body?.onRamptoken,
            userId: req.body?.userId,
            amount: req.body?.amount,
            webHookLink:req.body?.webHookLink,
            webHookSecret : process.env.WEB_HOOK_SECRET || ""
        }
        const {success,error}=transferInfo.safeParse(transferInformation);
        if (!success) {
            return res.status(400).json({
              message: `Invalid input: ${error}`,
              success:false,
            });
        }
        //-Verify User Payment Detail 
        //-Create the Payment Session B/w UserId & Paytm
        //-Request to WebHook if WebHook return 200 status Code then succes or RollBack Transction
        

        const WebHookResponse:responseTypes=await axios.post(transferInformation.webHookLink,transferInformation);
            
        if(WebHookResponse.data.message=="Captured"){
            return res.status(200).json({
                message:"Captured",
                success:true
            })
        }

        return res.status(400).json({
            message: WebHookResponse.data.message,
            success:false,
        });
        
    } catch (error) {
        res.status(500).json({
            message: `Error while Transation ${error}`,
            success:false,
        });
    }
})


app.listen(PORT,()=>{
    console.log(`WebHook is running on port ${PORT}`);
})

