const express=require('express');
const { todoSchema } = require('./types');
const { todos } = require('./db/db');
const app=express();
const port=3000;

app.use(express.json());


app.post('/todo',async (req,res)=>{
    const createPayload=req.body;
    const parsedPayload=todoSchema.safeParse(createPayload);

    if(!parsedPayload.success){
        res.status(411).json({msg:"Wrong Inputs"});
    }

    await todos.create({
        title:createPayload.title,
        description:createPayload.description
    })

    res.json({
        msg:"-->Todo Create"
    })

})

app.get('/todos',(req,res)={

    
})



app.put('/completed',(req,res)={

})


app.listen(port);




