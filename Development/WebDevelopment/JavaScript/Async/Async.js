//!Synchronous
//* In synchronous programming, code is executed in a linear sequence, one statement at a time.
//* This means that each statement must wait for the previous one to finish executing before it can start

const { forEach } = require("async");


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



const { log } = require("console");
const fs=require("fs");
//*Async Funtions
fs.readFile("file.txt","utf-8",(err,data)=>{
    console.log(data);
});
console.log("hello");

//! Message Queue:(callback queue)
//* Asynchronous tasks, such as callbacks from I/O operations, timers, or user interactions, are placed in a message queue.
//* Each message represents a task is complete but that needs to be executed on main stack .
//* complete first executed on main stack first

//! Event Loop :
//~ The event loop is a mechanism that allows JavaScript to perform asynchronous operations and handle events without getting blocked.
//* If there are messages in the queue(callback queue) that are ready to be processed and execution stack is empty ,
//* then it takes the first message and pushes the associated callback function onto the execution stack.
//* pull task from Message Queue:(callback queue) and push to execution stack.


//!SetTimeOut
//@ setTimeout(function, milliseconds,fn arg1, fn arg2.....);do not call fn

//*  method is used to execute a function after a specified delay. The delay is specified in milliseconds
//* The setTimeout() method calls a function or evaluates an expression after a specified number of milliseconds.
//* Tip: 1000 ms = 1 second.
//!M01
setTimeout(() => {
    console.log("TimeOut");
}, 1000);
//!M02
setTimeout(hide,5000); //~ (fn name, Time ms, fn arg1, fn arg2.....) do not call fn


//!ClearTimeOut
//* The clearTimeout() method clears a timer set with the setTimeout() method.
//* The ID value returned by setTimeout() is used as the parameter for the clearTimeout() method.
let time=setTimeout(() => {
    console.log("TimeOut");
}, 1000);
clearTimeout(time);

//!SetInterval
//@ setInterval(function, milliseconds ,fn arg1, fn arg2.....);
//* The setInterval() method calls a function or evaluates an expression at specified intervals (in milliseconds).
//* The setInterval() method will continue calling the function until clearInterval() is called, or the window is closed.
//*  method in JavaScript is used to repeat a specified function at every given time-interval
let i=0;
let interval=setInterval(() => {
    i++;
    console.log("Interval");
    if(i==5){
        clearInterval(interval);
    }
}, 1000);
setInterval(hide,1000);//~ (fn name, Time ms, fn arg1, fn arg2.....) do not call fn
clearInterval(interval);


//! callback(funtional argument)
//* A more formal definition would be - Any function that is passed as an argument to another function so that 
//* it can be executed in that other function is called as a callback function.
//* A JavaScript callback is a function which is to be executed after another function has finished execution.
//* usfull in async programming
function callbackfn() {
    console.log("The callback function has been executed.");
  }
function outerFunction(fn) {
    console.log("The outer function has been executed.");
    fn();
  }
  
outerFunction(callbackfn);





