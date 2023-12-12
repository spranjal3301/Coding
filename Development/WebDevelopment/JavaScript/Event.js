//!Events
//* When JavaScript is used in HTML pages, JavaScript can "react" on these events.
//! Common HTML Events
//* onchange	An HTML element has been changed
//* onclick	The user clicks an HTML element
//* onmouseover	The user moves the mouse over an HTML element
//* onmouseout	The user moves the mouse away from an HTML element
//* onkeydown	The user pushes a keyboard key
//* onload	The browser has finished loading the page

alert("TimeOut");//* Do not return any things(undefind)
let name=prompt("Pranjal","Guest") //* (messege,default arg) same as alert with return value
let chk=confirm("Are you sure") //* (messege) return true or false (alert warning oK or Cancle)

//!Event Listener 
//* The addEventListener() method attaches an event handler to the specified element.
//* The addEventListener() method attaches an event handler to an element without overwriting existing event handlers.
//* You can add many event handlers to one element.
//* You can add many event handlers of the same type to one element, i.e two "click" events.
function hide(){
    document.getElementById("box").style.color="red";
}
let box=document.getElementById("box"); //!if us do not make varibale it auto point to its id
box.addEventListener("mouseover",hide());



//! DOM manupulation
//* The Document Object Model (DOM) is a programming interface for HTML and XML documents. 
//* It represents the page so that programs can change the document structure, style, and content.
let main=document.getElementById("heading");
main.innerHTML="Pranjal";
main.innerHTML='<div class="container">Pranjal</div>';
main.innerText="Pranjal";

let nav=document.getElementsByClassName("box"); //~ Bring class name
nav[0].style.color="red";

let tag=document.getElementsByTagName("div"); //~ Bring tag name

let sel=document.querySelector(".container"); //~ Bring first class name

let selAll=document.querySelectorAll(".container"); //~ Bring all class name




