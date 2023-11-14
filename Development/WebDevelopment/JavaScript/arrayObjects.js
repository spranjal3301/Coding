//! Array: 
//* Hetrogeous data types which store list of items
//* Array indexes start with 0.
//*  const array_name = [item1, item2, ...];    
const arr=[1,"23",true]; //*common practice to declare arrays with the const keyword.
console.log(arr);
let num = arr[0];

//! Array Method
//* Array length: Returns the length of the array.
//* Array push(): Adds one or more elements to the end of the array.
//* Array pop(): Removes the last element from the array.
//* Array shift(): Removes the first element from the array.
//* Array unshift(): Adds one or more elements to the beginning of the array.   
//* Array splice(): Adds or removes elements from the array.
//* Array slice(): Extracts a section of the array and returns a new array.
//* Array concat(): Joins two or more arrays and returns a new array.
//* Array includes(): Checks whether an array contains a specified element.
//* Array indexOf(): Returns the first index of an element in the array.
//* Array lastIndexOf(): Returns the last index of an element in the array.
//* Array join(): Joins all elements of an array into a string.
//* Array toString(): Converts an array to a string.
//* Array fill(): Fills all the elements of an array from a start index to an end index with a static value.
//* Array reverse(): Reverses the order of the elements in an array.
//* Array sort(): Sorts the elements of an array.

//! Array Iteration
//* Array forEach(): Calls a function for each element in the array.
const a=[1,2,3,4,5];
a.forEach(function f(element){
    console.log(element);})
a.forEach((item,index)=>{
    console.log(item,index);});
//* For of Loop
for(element of a){
    console.log(element);
}

//! Objects : key:value
//* Objects are variables too. But objects can contain many values.
//* Objects are written with curly braces {}.
//*common practice to declare objects with the const keyword.
const car = {type:"Fiat", model:"500", color:"white" ,
 fullName : function() {return this.color + " " + this.model;}};  //*fn inside object
// Accessing Object value by key
let c =car.color;
c=car["color"]; // to access the key with space "color 1"
console.log(car.fullName()); //*you access a method without the () parentheses, it will return the function definition:

//! Object Method
//* Object.keys(): Returns an array containing the property names (keys).
//* Object.values(): Returns an array containing the property values.
//* Object.entries(): Returns an array containing both the property values and property names.
//* Object.assign(): Copies one object into another.
//* Object.freeze(): Freezes an object.
//* Object.seal(): Prevents new properties from being added to an object, but allows the modification of existing properties.
//* Object.create(): Creates a new object with the specified prototype object and properties.
//* Object.defineProperty(): Adds the named property described by a given descriptor to an object.
//* Object.defineProperties(): Adds the named properties described by the given descriptors to an object.
//* Object.getOwnPropertyDescriptor(): Returns a property descriptor for a named property on an object.

//! Object Iteration
for(key in car){
    console.log(key,car[key]);
}

//!JSON :JavaScript object notation
//* JSON is a syntax for storing and exchanging data or data transportation
//* JSON is a language-independent data format.
//* JSON uses JavaScript syntax, but the JSON format is text only.

//* JSON Syntax Rules
//* JSON syntax is derived from JavaScript object notation syntax:
//* Data is in key/value pairs

let jsonObj={
    "name":"Rahul",
    "age":21,
    "isMarried":false,
    "hobbies":["coding","gaming"],
    "address":{
        "street":"abc",
        "city":"xyz"
    }
}
let myJson=JSON.stringify(jsonObj);//?converts a JavaScript object into a string
console.log(myJson); 
myJson=JSON.parse(myJson);//?converts a string into a JavaScript object


//! Math
let m=Math;
console.log(m);
let r=m.random();
console.log(r);