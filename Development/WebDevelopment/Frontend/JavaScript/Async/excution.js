//!Synchronous
//* In synchronous programming, code is executed in a linear sequence, one statement at a time.
//* This means that each statement must wait for the previous one to finish executing before it can start

const { forEach } = require("async");

//ref : https://www.youtube.com/watch?v=eiC58R16hb8&list=WL&index=17&ab_channel=LydiaHallie

//! Asynchronous natual
//* Asynchronous programming, on the other hand, allows code to be executed in a non-linear fashion.
//* This means that statements can start executing before previous statements have finished executing. 
//* programming, on the other hand, allows code to be executed in a non-linear fashion.

//~Js is not Asynchronous
//~Js behave like Asynchronous (fast switch b/w tasks)

//* Asynchronous functions (async functions) are designed to run non-blocking code. 
//* Async is a way of writing code that allows other code to run while we wait for something to finish.
//? Two Ways of achive Async
//? delegate task(web api)
//? context switching

//! What are Common asyn Fn?
//~send Request
//?setTimeout
//?setInterval
//?fetch
//?XMLHttpRequest
//?axios
//?Promise
//~received Request
//?then catch
//?callbacks
//? async await

//~Async Funtions go into the "Side stack"(callback queue) and Control move to next line and came back after all main Stack tasks are completed. 
//*When an async function is invoked, it doesn't necessarily go to a 'side stack,' but it does run independently in the background.
//*The control does move to the next line immediately after calling an async function, allowing other tasks to proceed in the main stack. 

function hey(){
    console.log("HEy");
}
//*Async Funtions
setTimeout(hey,1000);//* goes into callback queue
console.log("hello");




const fs=require("fs");
//*Async Funtions
fs.readFile("file.txt","utf-8",(err,data)=>{
    console.log(data);
});
console.log("hello");

//! Message Queue/Callback Queue
//* Asynchronous tasks, such as callbacks from I/O operations, timers, or user interactions, are placed in a message queue.
//* Each message represents a task is complete but that needs to be executed on main stack .
//* complete first executed on main stack first

//- 1. Task Queue:
    //* Holdes Web api(fetch,setTimeout) and EventHandler(onclick,onChange) tasks. 
//- 2. MicroTask Queue:
    //* Holdes Promises and async await tasks.
    //* Microtask queue has higher priority (executed before the task queue).
    //* Microtask can also schedule other microtasks, which will be executed before any other task.


//! Event Loop :
//~ The event loop is a mechanism that allows JavaScript to perform asynchronous operations and handle events without getting blocked.
//* If there are messages in the queue(callback queue) that are ready to be processed and execution stack is empty ,
//* then it takes the first message and pushes the associated callback function onto the execution stack.
//* pull task from Message Queue:(callback queue) and push to execution stack.











