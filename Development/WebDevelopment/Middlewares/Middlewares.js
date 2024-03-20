const express=require('express');
const app=express();
const port=3000;

//! Ugly solution for Authtication Authorization and input validation
function usernameValidation(username,password){
    if(username==="xyz" && password=="pass"){
        return true;
    }else{
       return false;
    }
}

app.get('/',(req,res)=>{
    usernameValidation(req.query.username,req.query.password)?
    res.send('Hello User!'):res.send('Invalid username or password');
   
});


//~introduce another route that does Authtication Authorization and input validation
//!Middleware
//*It is callback funtion commonly used for tasks such as authentication, logging, and error handling.
//*Middleware is a function that has access to the  request, response, and next middleware functions.



//~Syntax
//*app.get/put/post/delete([path,] callback1 [, ...callbackn ])



function authMiddleware(req,res,next){
    if(req.header.username==="xyz" && req.header.password=="pass"){

        //! req.Data="We Propogate Data from one middleware to another middleware use req.Data"
        next();//~next() is used to call next middleware function in the stack
    }else{

       res.status(401).send('Invalid username or password');
    }
}

function inputValidationMiddleware(req,res,next){
    console.log(req.data);
    next();
}
let requestCount=0;
function countRequestMiddleware(req,res,next){
    requestCount++;
    console.log(requestCount);
    next();
}

app.get('/login',authMiddleware,inputValidationMiddleware,countRequestMiddleware,(req,res)=>{
    res.send('Login');
});





//~ app.use(middleware [, middleware...])
//*app.use is used to call middleware function for all routes at ones (get,put,post,delete) or common Middleware function for all routes
//~comes before all routes (at top)
app.use(countRequestMiddleware);



//~ this Middleware (express.json()): tell express what type of data you send over network
//~Libarys for handle body (express not handle body)  
//*req.body is populated by middleware, such as body-parser or express.json().
//*Express has a built-in middleware function called express.json() which parses incoming requests with JSON payloads.
app.use(express.json());



//!Gobal Catch (Error Middleware)
//*It is used to catch all errors in application
//*we don't want to show error to user so we send response to user
//~comes after all routes
app.use((err,req,res,next)=>{
    console.log(err);
    res.status(500).send('Something went wrong');
});



app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`);
});