//!Synchronous
//* In synchronous programming, code is executed in a linear sequence, one statement at a time.
//* This means that each statement must wait for the previous one to finish executing before it can start

const { forEach } = require("async");

//! Asynchronous
//* Asynchronous programming, on the other hand, allows code to be executed in a non-linear fashion.
//* This means that statements can start executing before previous statements have finished executing. 
//* programming, on the other hand, allows code to be executed in a non-linear fashion.


//~Js is not Asynchronous
//~Js behave like Asynchronous (fast switch b/w tasks)

//! different way to achive aysnc
//~send Request
//@ fetch
//@ XMLHttpRequest
//@ axios
//@ Promise
//@ setTimeout
//@ setInterval
//~received Request
//@ then catch
//@ callbacks
//@ async await

async function example(){
    const data=await fetch("");
}

//!SetTimeOut
//@ setTimeout(function, milliseconds);
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
//@ setInterval(function, milliseconds);
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


//! callback
//* A JavaScript callback is a function which is to be executed after another function has finished execution.
//* A more formal definition would be - Any function that is passed as an argument to another function so that 
//* it can be executed in that other function is called as a callback function.
function callback() {
    console.log("The callback function has been executed.");
  }
function outerFunction(fn) {
    console.log("The outer function has been executed.");
    fn();
  }
  
outerFunction(callback);




