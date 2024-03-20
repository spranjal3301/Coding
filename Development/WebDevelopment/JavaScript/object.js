//! Objects : key:value
//* only allows strings and symbols as keys
//* Objects are variables too. But objects can contain many values.
//* Objects are written with curly braces {}.
//*common practice to declare objects with the const keyword.
const car = {type:"Fiat", model:"500", color:"white" ,
            fullName : function() {return this.color + " " + this.model;} //*fn inside object
}; 
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

//!Object Length

console.log(Object.keys(car).length);
console.log(Object.keys(car));
console.log(Object.values(car));
console.log(Object.entries(car));


//! Object Iteration
const myObject = { a: 1, b: 2, c: 3 };

for (let key in myObject) {
  if (myObject.hasOwnProperty(key)) {
    console.log(key, myObject[key]);
  }
}
Object.keys(myObject).forEach(key => {
  console.log(key, myObject[key]);
});


//!Difference between Object and JSON
//? objects are native data structures in JavaScript,
//? while JSON is a text-based data format that is used to store and transmit data.
//? JSON is based on JavaScript objects, but it has a stricter syntax. 

// object = {               JSON = {
//   name: "John Doe",              "name": "John Doe", //~JSON keys must be strings
//   age: 30,                       "age": 30,
// };                               }


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