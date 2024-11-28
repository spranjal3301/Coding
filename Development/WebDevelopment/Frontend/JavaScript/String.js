// JavaScript counts positions from zero.
let a="pranjal";
let b="singh";
let c=a+" "+b;
console.log(c);
a="pranjal 'singh'";
a='pranjal "singh"';// inserts a double quote in a string:

console.log("heloo",c);
console.log("heloo"+pranjal);

//!Breaking JavaScript statement
document.getElementById("demo").innerHTML = 
"Hello Dolly!"; 
document.getElementById("demo").innerHTML = "Hello " +
"Dolly!";

//!f-String
let temp=`${a} or ${b} and ${c}`; //pranjal or singh and pranjal singh  
console.log(temp);

//!Escape squ char
console.log("\n")//* new Line
console.log("\t")//* tab
console.log("\b")//* backspace

//! String Method 
//* String length: Returns the length of the string.
//* String slice(): Extracts a portion of the string and returns it as a new string.
//* String substring(): Similar to slice(), it extracts a part of the string.
//* String substr(): Also extracts a substring, but takes a starting index and length as parameters.
//* String replace(): Replaces a specified substring with another string.
//* String replaceAll(): Replaces all occurrences of a specified substring with another string.
//* String toUpperCase(): Converts the string to uppercase.
//* String toLowerCase(): Converts the string to lowercase.
//* String concat(): Combines two or more strings and returns a new concatenated string.
//* String trim(): Removes whitespace from the beginning and end of the string.
//* String trimStart(): Removes leading whitespace from the string.
//* String trimEnd(): Removes trailing whitespace from the string.
//* String padStart(): Pads the string with a specified character until it reaches a certain length from the start.
//* String padEnd(): Pads the string with a specified character until it reaches a certain length from the end.
//* String charAt(): Returns the character at a specified index in the string.
//* String charCodeAt(): Returns the Unicode value of the character at a specified index.
//* String split(): Splits the string into an array of substrings based on a specified delimiter.
//* String indexOf(): Returns the index of the first occurrence of a specified substring.
//* String lastIndexOf(): Returns the index of the last occurrence of a specified substring.
//* String search(): Searches for a specified pattern and returns the index of the first match.
//* String match(): Searches for a specified pattern and returns an array of matches.
//* String matchAll(): Searches for all occurrences of a specified pattern and returns an iterator of matches.
//* String includes(): Checks if a specified substring exists within the string.
//* String startsWith(): Checks if the string starts with a specified substring.
//* String endsWith(): Checks if the string ends with a specified substring.

//- arr.length -1 -> -1
console.log(temp.length); //*String Length
temp.slice(star,end); //* [start,end)
temp.substring(start, end);
let text = "Please visit Microsoft and Microsoft!";
let newText = text.replace("Microsoft", "google"); //*replace() method does not change the string .returns a new string.
                                                    //* replaces only the first match
text = "Please locate where 'locate' occurs!";
let index = text.indexOf("locate");    //*returns the index (position) the first occurrence of a string in a string:



 
