const express = require("express");
const {PORT} = require("./config");
const rootRouter=require("./routes")
const core = require("cors");


const app = express();
//-Standerd Practice for start route with /...

app.use(express.json());
app.use(core());
//`Route use /api/vi/...  transfer at rootRouter 
app.use("/api/v1", rootRouter); //-Standerd Practice for versioning


//-gobal catch
app.use((err,req,res,next)=>{
    console.log(err);
    res.status(500).send("Something went wrong");
})




app.listen(PORT,()=>console.log(`http://localhost:3000/api/v1/user`));


//-./routes
{
    const {Router}=require('express');
    const userRouter=require('./user');
    const accountRouter=require('./account');
    const router=Router();


    router.use('/user',userRouter);
    router.use('/account',accountRouter);



    module.exports=router;
}