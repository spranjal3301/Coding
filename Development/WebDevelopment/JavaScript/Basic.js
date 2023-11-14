//!JavaScript/ECMAScript

//* JavaScript also known as a scripting language for web pages.
//* JavaScript is a weakly typed language (dynamically typed)
//* JavaScript (JS) is the most popular lightweight, interpreted compiled programming language.
//* It can be used for both Client-side as well as Server-side developments.
//* JavaScript is an object-oriented programming language.


//!Application of JavaScript
    //! AJAX request: Update a web page without reloading the page
        //* AJAX stands for Asynchronous JavaScript And XML.
        //* AJAX is a technique for accessing web servers from a web page.
    //! DOM manupulation :
        //* The Document Object Model (DOM) is a programming interface for HTML and XML documents. 
        //* It represents the page so that programs can change the document structure, style, and content.

//* JavaScript can "display" data in different ways:
    //? Writing into an HTML element, using innerHTML.
    //? Writing into the HTML output using document.write().
    //? Writing into an alert box, using window.alert().
    //? Writing into the browser console, using console.log().

//!Print Output 
console.log("Here We go Again"); 

//! Variable Deleration 
//! var
    var a=9;
    var name="Pranjal";
    //* Hoisting
    console.log(x); //*undefind (access before initialization)
    var x = 5; 
    {
    //? issues with using the var keyword was redeclaring a variable inside a 
    //? block will also redeclare the variable outside the block
    var x = 6;
    console.log(x); //?6
    }
    console.log(x); //?6
    //! var is function scoped and let & const is block scoped
    {
        let x = 2;
    }
    // x can NOT be used here
    {
        var x = 2;
    }
    // x CAN be used here

//! let
    let $ = "Hello World";
    //* Cannot Hoisting
    console.log(y); //?ReferenceError: Cannot access 'x' before initialization
    let y=9; 
    {
        let y=4;
        console.log(y); //*4
    }
    console.log(y); //*9

 //camel notation Varibale name: firstName

//! Constant Deleration 
//* use const if the value/type  should not be changed
const pi=3.14; //Declares a block constant
//* The keyword const is a little misleading.
//* It does not define a constant value. It defines a constant reference to a value.
//* Because of this you can NOT:
    //? Reassign a constant value
    //? Reassign a constant array
    //? Reassign a constant object
// But you CAN:
    //? Change the elements of constant array
    //? Change the properties of constant object
{
    // You can create a constant array:
    const cars = ["Saab", "Volvo", "BMW"];

    // You can change an element:
    cars[0] = "Toyota";

    // You can add an element:
    cars.push("Audi");

    // can NOT reassign the array
    cars = ["Toyota", "Volvo", "Audi"];    // ERROR
} 
{
    // You can create a const object:
    const car = {type:"Fiat", model:"500", color:"white"};

    // You can change a property:
    car.color = "red";

    // You can add a property:
    car.owner = "Johnson";

    // can NOT reassign the object
    car = {type:"Volvo", model:"EX60", color:"red"};    // ERROR
} 
//! Operators
console.log(3+2); //Addition
console.log(3-2); //Subtraction
console.log(3*2); //Multiplication
console.log(3/2); //Division
console.log(3%2); //Modulus
console.log(3**2); //Exponentiation
console.log(3++); //Increment
console.log(3--); //Decrement
console.log(3=="3"); //*Equal to
console.log(3===3); //*equal value and equal type
console.log(3!=2); //*Not equal
console.log(3!=="3"); //*not equal value or not equal type
//* Comparing two JavaScript objects always returns false.
// &&	logical and
// ||	logical or
// !	logical not

let x = 10;
x += 5; //*Valid

console.log("3"+"3"); //*33
console.log("3"+3); //*33
console.log(3+3); //*6
console.log(3-"3"); //*0
console.log(3 + + "3"); //* 3 (number) + +"3" (converted to a number) = 3 (number) + 3 (number) = 6.
console.log(3 - - "3"); //* 3 (number) - -"3" (converted to a number) 3 - (-3) =6
console.log(16 + 4 + "Volvo")//* 20Volvo
console.log("Volvo" + 16 + 4)//* Volvo164

//! Data Types
// JavaScript has 8 Datatypes
//* 1. String
//* 2. Number
//* 3. Bigint : 64-bit floating point
//* 4. Boolean
//* 5. Undefined
//* 6. Null
//* 7. Symbol
//* 8. Object

// The object data type can contain:
//* 1. An object
//* 2. An array
//* 3. A date

// Numbers:
let length = 16;
let weight = 7.5;

// Strings:
let color = "Yellow";
let lastName = "Johnson";

// Booleans
let a = true;
let b = false;

// Object:
const person = {firstName:"John", lastName:"Doe"};

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25");

// Undefined:
let name;
let age = null;

// Symbol:
const sym = Symbol();

// BigInt:
const bigNumber = 1234567890123456789012345678901234567890n;

//! JavaScript ifElse

if (condition) {
    //  block of code to be executed if the condition is true
} 
else if(condition) {
    //  block of code to be executed if the condition is true
} 
else {
    //  block of code to be executed if the condition is false   
}

//! JavaScript Switch
switch(expression) {
    case x:
        // code block
        break;
    case y:
        // code block
        break;
    default:
        // code block
}
//!Functions
//* In Js you  decelerated function any where in js it automatic pushed to top of js at compile time
//* function name(parameter1, parameter2, parameter3) {
     //* code to be executed
//*   }
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
//* Arrow fn do not have this. (lexical this)
//~ Arrow functions are lexically scoped, which means that their this binding is bound to the context of the surrounding scope.
//~ This means that whatever this refers to can be preserved by using an arrow function.

const x = (x, y) => x * y;
console.log(x(5, 6)); //*30





//!Loops
//* for loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}
//* while loop
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
//* do while loop
i = 0;
do {
    console.log(i);
    i++;
}while(i<5) 

























