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
//! setTimeout()
//*  method is used to execute a function after a specified delay. The delay is specified in milliseconds
//@ setTimeout(function, milliseconds);

//! setInterval()
//*  method in JavaScript is used to repeat a specified function at every given time-interval
//@ setInterval(function, milliseconds);