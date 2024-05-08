const express=require('express');
const cors=require('cors');
const { todoSchema } = require('./types');
const { todos } = require('./db/db');
const app=express();
const port=3000;

app.use(express.json());
app.use(cors());
// http://localhost:3000/todos

app.post('/todo',async (req,res)=>{
    const createPayload=req.body;
    const parsedPayload=todoSchema.safeParse(createPayload);

    if(!parsedPayload.success){
        res.status(411).json({msg:"Wrong Inputs"});
    }

    const newTodo=await todos.create({
        title:createPayload.title,
        description:createPayload.description,
        completed:false
    })

    res.json({
        msg:"-->Todo Create",
        id:newTodo._id
    })

})

app.get('/todos',async(req,res)=>{
    const Alltodos=await todos.find({});

    res.json({Alltodos});
})



app.put('/completed',async(req,res)=>{
    const updatePayload=req.body;
    const parsedPayload=todoSchema.safeParse(updatePayload);

    if(!parsedPayload.success){
        res.status(411).json({msg:"Wrong Inputs"});
    }
    await todos.updateOne({_id:updatePayload.id},{completed:true})

    res.json({
        msg:"Todo Updated"
    })
})


app.listen(port);




