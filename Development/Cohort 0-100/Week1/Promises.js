//! Asynchronous natual
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
//* Each message represents a task that needs to be executed.

//! Event Loop :
//~ The event loop is a mechanism that allows JavaScript to perform asynchronous operations and handle events without getting blocked.
//* If there are messages in the queue(callback queue) that are ready to be processed and execution stack is empty ,
//* then it takes the first message and pushes the associated callback function onto the execution stack.




// function hey(){
//     console.log("HEy");
// }
//Async Funtions
// setTimeout(hey,1000);
// console.log("hello");
//* This code is ugly , Promises are syntactical sugar that make this code slightly more readable and easier to work with.
//* Promises are prettier way of using callbacks and remove callback hell.

//!Promises:
//* Promises are a way to handle asynchronous operations in JavaScript.
//* Promises are object that represent eventual completion or failure of an asynchronous operation and 
//* allow you to handle the result or error once the operation is finished.
//* A promise may be in one of 3 possible states: fulfilled, rejected, or pending.

// Creating a promise 
//~Promise by default takes fn have two argument "resolve" & "reject"
let myPromise = new Promise(function(resolve, reject){
    // Asynchronous operation (e.g., fetching data, reading a file)
    let operationSucceeded = true;
  
    if (operationSucceeded) {
      //~ resolve is a function that is called when the promise is fulfilled. 
      //~ It takes one argument, the result of the operation.
      resolve("Operation successful!");
    } else {
      // If the operation fails, call reject with an error message
      reject("Operation failed!");
    }
  });
  function callback(result){
    // This function is called when the promise is fulfilled
      console.log(result);
  }
  // Handling the promise
  //~ resolve ---> .then(callbackFn)
  //~ resolve(result) ---> by default pass one argument to callbackFn after promise is fulfilled.
  //~ chaining ---> .then(callbackFn).then(callbackFn).then(callbackFn)...........
  myPromise.then(callback);

  //~ reject ---> .catch 
  myPromise.catch((error) => {
    // This function is called when the promise is rejected
    console.error(error);
  });

  //~ default (run in any of case) ---> .finally()
  myPromise.finally(()=>console.log("finally Promise resolve or reject"));
  


//! Promise.all()
//* Promise.all() takes an array of promises and returns a single promise.
//* The returned promise will resolve when all of the promises in the array have resolved.
//* If any of the promises in the array reject, then the returned promise will reject.
//* Promise.all() is useful when you want to wait for multiple asynchronous operations to complete.

let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise 1 resolved");
    }, 1000);
  }
);

let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise 2 resolved");
    }, 2000);
  }
);

let promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise 3 resolved");
    }, 3000);
  }
);

let promises = [promise1, promise2, promise3];

Promise.all(promises).then((data) => console.log(data));
// Promise.all(promises).then((data) => console.log(data[0]));
// Promise.all(promises).then((data) => console.log(data[1]));
// Promise.all(promises).then((data) => console.log(data[2]));

//!Async/Await
//* "async and await make promises easier to write"
//* async makes a function return a Promise
//* await makes a function wait for a Promise
//* await is only work under aync function
//* async and await are syntactical sugar that make promises easier to work with.built on top of promises.

async function main(){
  let result = await myPromise;//* wait untile promise resolve
  console.log(result);
}
main();
console.log("hi there");//*run immediately after call main



