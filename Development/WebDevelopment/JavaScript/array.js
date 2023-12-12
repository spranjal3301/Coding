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
//~2D Array intialization
let n=9;
let m=9;
const arr1 = Array.from({ length: n }, () => Array(m).fill(0));



