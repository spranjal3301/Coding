//! callback
//* A more formal definition would be - Any function that is passed as an argument to another function so that 
//* it can be executed in that other function is called as a callback function.
//* A JavaScript callback is a function which is to be executed after another function has finished execution.
function callbackfn() {
    console.log("The callback function has been executed.");
  }
function outerFunction(fn) {
    console.log("The outer function has been executed.");
    fn();
  }
  
outerFunction(callbackfn);

// ref: https://www.youtube.com/watch?v=Xs1EMmBLpn4&ab_channel=LydiaHallie

// function hey(){
    //     console.log("HEy");
    // }
    //Async Funtions
    // setTimeout(hey,1000);
    // console.log("hello");
    //* This code is ugly , Promises are syntactical sugar that make this code slightly more readable and easier to work with.
    //* Promises are prettier way of using callbacks under the hood and avoid callback hell.
    
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
      //~ resolve(result) ---> by default pass one argument to callbackFn after promise is resolved.
      //~ chaining ---> .then(callbackFn).then(callbackFn).then(callbackFn)...........
      myPromise.then(callback); //*fetch.then(callback)
    
      //~ reject ---> .catch 
      myPromise.catch((error) => {
        // This function is called when the promise is rejected
        console.error(error);
      });
    
      //~ default (run in any of case) ---> .finally()
      myPromise.finally(()=>console.log("finally Promise resolve or reject"));
      
   
      
    //!Promise Chaining
    //* Promise chaining is a way to call multiple asynchronous operations one after the other.
    //* When you chain promises, you can pass the result of one promise to the next promise.
    //* This allows you to perform multiple asynchronous operations in a specific order.

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("Promise resolved");
        }, 1000);
      }
    );

    promise.then((data) => {
      console.log(data);
      return "First then";
    }
    ).then((data) => {
      console.log(data);
      return "Second then";
    }
    ).then((data) => {
      console.log(data);
    });
    
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

    





    //!Async_Await
    //* async and await are syntactical sugar that make promises easier to work with.built on top of promises.
    //* "async and await make promises easier to write"
    //* async makes a function return a Promise
    //* await makes a function wait for a Promise
    //* await is only work under aync function
    
async function main(){
  let result = await myPromise;//* wait untile promise resolve
    console.log(result);
  }
main();
console.log("hi there");//*immediately after call main   
    
async function checkWeather(city){
  const response = await fetch(apiUrl+city+`&appid=${apiKey}`);
    let data=await response.json();
      console.log(data);
    }
    
    
    
    
    
    
    
    