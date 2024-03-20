//!HTTP Server/Rest API
//*HTTP Server(use in brower)==Rest API(use outside the brower)


//*Initilize "npm init -y"
//*Install Express "npm install express"    
//*Importing Express
const express=require("express");//~libary use to create HTTP server
//*Initilize Express
const app=express();
const port=3000;//*Port use for multiple HTTP server


//~Middleware: tell express what type of data you send over network
//~Libarys for handle body (express not handle body)  
//*req.body is populated by middleware, such as body-parser or express.json().
const bodyParser=require("body-parser");
//?app.use(bodyParser.json());
//? app.use(express.urlencoded({extended:true}));
app.use(express.json());


//*Create a route : localhost:3000
app.get("/",(req,res)=>{

    const n=request.query.n; //~ /?n=23  
    //~ /:id(/331) req.params.id  

    
    
    res.send("Hello World"); //*Send response in string format
    
    //~res.json({message:"Hello World"}); //*Send response in json format
    
})


app.get("/:id",(request,response)=>{
    let n=request.query.n; //~ /?n=23  
    n=request.params.id;    //~ /:id(/331) req.params.id


});

app.post("/",(request,response)=>{

    //~request.body.attributeName
    console.log(request.body);
    //~Process "get" request as per require of frontend....

    //~req.header.attributeName+

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

//*Create a server on Port
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})



//@use PostMan for check backend without Frontend sending requst to backend