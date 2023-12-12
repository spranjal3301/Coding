//! Async
//* Asynchronous functions (async functions) are designed to run non-blocking code. 
//* Async is a way of writing code that allows other code to run while we wait for something to finish.
//? Two Ways of achive Async
//? multi-threading/delegate task
//? context switching

//! What are Common asyn Fn?
//? setTimeout
//? setInterval
//? fetch
//? requestAnimationFrame
//? addEventListener
//? Promise.resolve
//? queueMicrotask
//? read/write file

//~Async Funtions go into the "Side stack"(callback queue) and Control move to next line and came back after all main Stack tasks are completed. 
//*When an async function is invoked, it doesn't necessarily go to a 'side stack,' but it does run independently in the background.
//*The control does move to the next line immediately after calling an async function, allowing other tasks to proceed in the main stack. 

function hey(){
    console.log("HEy");
}
//*Async Funtions
setTimeout(hey,1000);
console.log("hello");



const fs=require("fs");
//*Async Funtions
fs.readFile("file.txt","utf-8",(err,data)=>{
    console.log(data);
});
console.log("hello");

//! Message Queue:(callback queue)
//* Asynchronous tasks, such as callbacks from I/O operations, timers, or user interactions, are placed in a message queue.
//* Each message represents a task that needs to be executed.

//! Event Loop :
//~ The event loop is a mechanism that allows JavaScript to perform asynchronous operations and handle events without getting blocked.
//* If there are messages in the queue(callback queue) that are ready to be processed and execution stack is empty ,
//* then it takes the first message and pushes the associated callback function onto the execution stack.

