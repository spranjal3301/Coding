//! What Typescript
//* TypeScript, a superset of JavaScript
//* add static Type check on Js

//* TypeScript code is transpiled to JavaScript during the compilation process,
//*  ensuring that the resulting code is compatible with various JavaScript environments and browsers.

//* The TypeScript Compiler (tsc) is a command-line tool that processes TypeScript code

//* "TypeScript" check types at Compile time "Zod" check at runtime

// npm install -g typescript
// npm inti -y
// npx tsc --init
// tsc -b
// gitignore dist

//`   Exporting and importing modules
//Old 
//- const express=require('express')
//-  module.exports=a;

//New 
//- import express from 'express';
//- export default express;

//` install types as devdependence
//npm install xyz  @types/xyz --save-dev
//npm install @types/express -save-dev
//npm install @types/node -save-dev

//!tsconfig
//- target:which ECMA script version it converted into 
// target:"es2016"

//`FolderStructure
//- input(ts)->src  rootDir:"./scr"
//- output(js)->dist outDir:"./dist" /build


//- "noImplicitAny": false 
//*auto assume 'any' type if type not given

//- "removeComments":true 
//remove comments



//! TypeScript Types
//* Number
const x:number=1;
//* String
const s:string="sting";  //String == string
//* Boolean
const b:boolean=true;
//* Array
const a:Array<number>=[1,2,3];
const arr:number[]=[1,23];
//* Tuple
const t:[number,string]=[1,'string'];
//* Null
const n:null=null;
//* Undefined
const u:undefined=undefined;
//* Void
const v:void=undefined;
//* Object
const o:Object={};
//* Union
const l:1|2|3=1;
//* Any
let notSure;
//* Literal
let st: 'pending' | 'approved' | 'rejected'='pending';
//* Enum:An enum is a special "class" that represents a group of constants (unchangeable variables).
enum Color{
    Red,   //0
    Green, //1
    Blue  //2
}
let c:Color=Color.Red;

//` Never
//* denote values that will never occur or be observed
// Functions that always throw errors or never return (like infinite loops) can be typed as returning never. 
// If a function has a return type of never, it implies that it will never reach the end of its execution,
// either due to an infinite loop or always throwing an exception
function test():never{
    throw new Error('Error');
}
//` Functions
function greet(str:string):string{
    return str;
}
const str=greet('Hello World'); //Type Inference

function hof(fn :Function){
    return fn();
}
function hof1(fn:()=>void){
    return fn();
}

//`Generics:
//*templete in cpp
function createPair<S, T>(v1: S, v2: T): [S, T] {
    return [v1, v2];
  }
  console.log(createPair<string, number>('hello', 42)); // ['hello', 42]








//` Type Inference
//* Type inference is a feature of TypeScript that allows the TypeScript compiler to automatically deduce the type of a variable or expression.
//* This means that you do not have to explicitly specify the type of every variable and expression in your code.

//` Interfaces
//* An interface in TypeScript is a way to define a contract in your code.
//* They can only be used to define object types, and they cannot be used to define
//* primitive types, union types, or tuple types.
interface Person{
    name:string;
    age:number;
    email?:string; //optional
}

const obj1:Person={
    name:'John',
    age:30
}

class Employee implements Person{
    name='John';
    age=30;
}


//`types
//* Type aliases in TypeScript allow you to create a new name for a type.
//* Types are more flexible and can define primitive, intersection, union, tuple, or different types of data.

// Define a custom data structure.
type Point = {
    x: number;
    y: number;
  };
  
  // Define a union type.
  type NumberOrString = number | string;
  
  // Define a tuple type.
  type Tuple = [number, string];
  
  // Define an interface.
  interface Person {
    name: string;
    age: number;
  }
  
  // Extend an existing interface.
  interface Employee extends Person {
    salary: number;
  }

  type user={
      name:string;
      age:number;
  }

  type users={
      [key:string]:user //`Dynamic key
  }


//` Type Guards
//* Type guards are a way to check the type of a variable at runtime.
//* They are used to ensure that a variable is of a certain type before performing operations on it.
//* Type guards can be implemented using the typeof operator, instanceof operator, or custom type guards.

//` Type Assertion
//* Type assertion is a way to tell the TypeScript compiler that you know the type of a variable better than it does.
//* It is like type casting in other languages, but it performs no special checking or restructuring of data.



interface PropsType{
    title:string,
    isActive:boolean,
}
  
function App(props:PropsType) { 
    return (
      {props}
    )
  }

//* Type assertions
//* Type aliases
//* Type Compatibility

//- Ignore the Typescript error
// @ts-ignore

//`  "!" 
//* Non-null assertion operator
//? example; prosses.env.PORT!






  

