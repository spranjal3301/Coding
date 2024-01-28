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
for(elements of directions){
    elements.forEach(element => {
        console.log(element);   
    });
}

//! Array.from
//*Array.from() lets you create Array s from: iterable objects (objects such as Map and Set );
//*or, if the object is not iterable, array-like objects (objects with a length property and indexed elements).

//* Array.from() provides a flexible way to transform and create arrays based on existing data or structures.
//* It's commonly used for converting array-like objects, strings, or other iterables into arrays


// Basic Usage:
const newArray1 = Array.from(existingArray);

// String Example:
const str = "hello";
const charArray = Array.from(str);
// Result: ['h', 'e', 'l', 'l', 'o']

// Array-Like Object:
const arrayLike = { length: 3, 0: 'a', 1: 'b', 2: 'c' };
const newArray2 = Array.from(arrayLike);
// Result: ['a', 'b', 'c']

// Callback Function:
const newArray3 = Array.from(existingArray, item => item * 2);
// Result: Each element of the new array is doubled.

//~2D Array intialization
let n=9;
let m=9;
const arr1 = Array.from({ length: n }, () => Array(m).fill(0));

//!map
//* The map() method creates a new array populated with the results of calling a provided function
//* on every element in the calling array.
//* map() does not change the original array.
//* The map() method calls the provided function once for each element in an array, in order.


function transformation(currentValue, index, array) {
    //*all three argument automatic came do not need to pass
    return currentValue*index;
  }
const array = [1, 4, 9, 16];
const newArray = array.map(transformation);

//!filter
//* The filter() method creates a new array with all elements that pass the test implemented by the provided function.
//* filter() does not change the original array.
//*Syntax
//? const newArray = array.filter(function(currentValue, index, array) {
//?     Your condition logic here
//?      Return true if the element should be included in the new array, false otherwise
//?   });

function isBigEnough(value) {
    return value >= 10;
  }
const number=[12, 5, 8, 130, 44];
const filtered = number.filter(isBigEnough);

//!reduce
//* The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in single output value.
//* reduce() does not change the original array.
//*Syntax
//? array.reduce(function(total, value, index, array) {
//?     Your reduce logic here
//?})

const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(array1.reduce(reducer)); //* 10 






