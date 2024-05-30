const express=require("express");
const app=express();
const PORT=parseInt(process.env.PORT) || 3001;
// # node --env-file=.env  index.js




function calculation(n){
    return Math.random()*n;
}


app.get("/",(request,response)=>{
    const n=request.query.n; //~ /?n=23  
                        //~ /:id(/331) req.params.id    
                


    // const result=calculation(n);
    response.send("result: "+result.toString());
    

});
app.get("/:id",(request,response)=>{
    let n=request.query.n; //~ /?n=23  
    n=request.params.id;    //~ /:id (/331) req.params.id


});

app.post("/",(request,response)=>{

    //~request.body.attributeName

    response.json({
        msg:"Done POst"
    })

});

app.put("/",(request,response)=>{
    response.json({
        msg:"Done Put"
    })

});

app.delete("/",(request,response)=>{
    response.json({
        msg:"Done Delete"
    })

});


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});