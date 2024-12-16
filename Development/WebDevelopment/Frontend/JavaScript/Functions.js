//!Functions
//* In Js you  decelerated function any where in js it automatic pushed to top of js at compile time

//!Types of Functions
//- Named Functions
//- Anonymous Functions
//- Arrow Functions
//- Immediately Invoked Function Expressions (IIFE)
//- Higher Order Functions



//! Named Functions
//? function name(parameter1, parameter2, parameter3) {
//?         code to be executed
//?  }
function myfuntion(a,b){
    return a+b;
}
function greet(){
    console.log("Hey");
    return 0;
}
function greet(a){
    console.log("Hey");
    return 0;
}
console.log(myfuntion(2,3));





//!Arrow Function
//* Arrow functions allow us to write shorter function syntax:
//* The return keyword is omitted.
//* The function keyword is omitted.
//* Parentheses are omitted.
//* The function is written after the arrow (=>) sign.
//* Arrow fn do not have "this". (lexical this)
//~ Arrow functions are lexically scoped, which means that their this binding is bound to the context of the surrounding scope.
//~ This means that whatever "this" refers to can be preserved by using an arrow function.

const x = (x, y) =>{ x * y};
y = (x, y) => x * y;
c = z => z*3;
console.log(x(5, 6)); //*30

//! Anonymous Functions
//* A function without a name is called an anonymous function.
//* An anonymous function is often not accessible after its initial creation.
//* Anonymous functions are often used as arguments to other functions.

//?Syntax
//? const myFunction = function() {//?     code
//? }

//? const myFunction = () => {
//?      code
//? }

const myFunction = function(a,b){
    return a+b;
}

const myFunction1 = (a,b) => a+b;



//! Immediately Invoked Function Expressions IIFE
//*auto executed function expression 
//* used to avoid polluting global scope
//* used to create a private scope
//* used to avoid naming conflicts

//* Syntax
//? (function(){
//?     // code
//? })();
(function() {
    console.log("IIFE");
})();



//! Higher Order Functions
//* A function that takes another function as an argument or returns a function is called a higher-order function.
//* Higher-order functions are a powerful tool in JavaScript.
//* They allow us to write more modular and reusable code.
//* They allow us to write more expressive code.

//?Example1
function myFunction(callback) {
     // code
     callback();
}
myFunction(function() {
     console.log("Hello World!");
});

//?Example2
function outer() {
    function inner() {
      console.log("Hello from the inner function!");
    }
    return inner;
}
  
const innerFunction = outer();
innerFunction(); // "Hello from the inner function!"



//! Callback Functions
//* A callback function is a function that is passed as an argument to another function.
//* Callback functions are often used with higher-order functions.