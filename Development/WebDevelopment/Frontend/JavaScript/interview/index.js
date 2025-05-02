
//!Excution Context
//- 1.Global Excution Context (this -> Window(browser) , Global(nodejs))
//- 2.Function Excution Context
//- 3.Eval Excution Context


//! Phases in Excution Context
//- 1.Memory Creation Phase
//- 2.Code Excution Phase


//` Memory Creation Phase
//- 1.Creation of Global Object ('this' object -> Window in browser, Global in nodejs)
//- 2.Memory allocation for variables and functions
        //? var ,let , const -> undefined
        //? function -> defination


//` Code Excution Phase
//- 1.Line by Line Excution
//- 2.Variables are assigned values  
//- functions are referenced and created there Function Excution Context and repeat Memory Creation and Code Excution Phase



//!Prototype
//- Prototyping in JavaScript is a mechanism that allows objects to inherit properties and methods from other objects.
//- Every [Array, Object, Function] in JavaScript has a prototype
//- Prototype is also an object

//* Every [Array, Object, Function,Class] in JavaScript automatically gets a prototype property when it's declared.
//* Prototype property use to defind methods and properties for that [Array, Object, Function]

//` Prototype Chain:
//` [Array, Object, Function,Class] -> Prototype -> Object -> Prototype -> null
//* Accessing a property or method of an object, JavaScript first looks for it on the object itself,
//* and if it cannot find it, it looks in the object's prototype, and so on up the prototype chain, 
//* until it either finds the property or reaches null.

//` Classes is just wrapper around prototype

const num = [1,2];

// Strurture :
//* (2) [1, 2]
//* 0: 1
//* 1: 2
//* length: 2
//* [[Prototype]]: Array(0)
//* at:ƒ at()
//* concat: ƒ concat()
//* constructor: ƒ Array()
//* copyWithin: ƒ copyWithin()
//* entries: ƒ entries()
//* forEach: ƒ forEach()
//* map: ƒ map()
//* pop:ƒ pop()
//* push: ƒ push()
//* reduce: ƒ reduce()
//* ...
//* Symbol(Symbol.iterator): ƒ values()
//* Symbol(Symbol.unscopables): 
//* {at: true, copyWithin: true, entries: true, fill: true, find: true, …}
//* [[Prototype]]: Object
 

// Constructor function
function Person(name) {
    this.name = name;
}

Person.num = 10 ; //? num is not a property of Person object

// Adding a method to the prototype
Person.prototype.greet = function() {
    return `Hello, my name is ${this.name}.`;
};

// Creating instances
const alice = new Person("Alice");
const bob = new Person("Bob");

// Using the shared method
console.log(alice.greet()); // Output: Hello, my name is Alice.
console.log(bob.greet());   // Output: Hello, my name is Bob.


//` Benefits of Prototypes:
// Memory efficiency: Methods are not duplicated across instances; they are shared via the prototype.
// Dynamic extensibility: Methods can be added to the prototype at runtime, and all linked objects gain access to them.


const arr = [1,2,3,4,5];
const obj = {name: 'John', age: 30};

//* Array -> Object -> null

Object.prototype.sayHelloObj = function() {
    console.log('sayHelloObj');
}

Array.prototype.sayHelloArray = function() {
    console.log('sayHelloArray');
}

arr.sayHelloArray(); // sayHelloArray
arr.sayHelloObj(); // sayHelloObj

// obj.sayHelloArray(); //! error 
obj.sayHelloObj(); // sayHelloObj


//` Prototypes Inheritance

const person = {
    isHuman: false,
    printIntroduction: function() {
        console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    }
};

const user = {
    name: 'John',
    isHuman: true
}

Object.setPrototypeOf(user, person); //- set prototype of user object to person object

