//! DOM (Document Object Model)
//*A programming interface for web documents or Web API used to build websites.
//*Browser Load HTML Document into Tree like data structure (DOM) of HTML elements/attributes and 
//*we can manipulate it via JavaScript.
//* It represents the page so that programs can change the document structure, style, and content.

//? When a web browser parses an HTML document, it builds a DOM tree and then uses it to display the document.


//!Get elements

let main=document.getElementById("heading");     //~ Bring id name


let nav=document.getElementsByClassName("box"); //~ Bring class name
nav[0].style.color="red";
//* getElementsByClassName/Id method returns an array-like object (specifically an HTMLCollection

let tag=document.getElementsByTagName("div"); //~ Bring tag name

let sel=document.querySelector(".container"); //~ Bring first css Selector(tag/class/Id name)

let selAll=document.querySelectorAll(".container"); //~ Bring all in Array css Selector(tag/class/Id name)

let x=document.body.children; //~ Bring all in Array css Selector(tag/class/Id name)
document.body.children[0];
document.body.firstElementChild;
document.body['div'];
// document.images
// document.scripts

//~HTML collection 
//HTML collection is a collection of elements in an HTML document.
//*Dynamic Changes (Live Changes)
// getElementsByTagName()/getElementsByTagName()  method returns a live HTMLCollection.

//~NodeList
//NodeList is a collection of nodes in an HTML document.
//*Static Changes
//querySelectorAll() method returns a static NodeList.




//!Change HTML
main.innerHTML="Pranjal";
main.innerHTML='<div class="container">Pranjal</div>'; //? innerHTML will take html tags
main.innerText="Pranjal";//? innerText will not take html tags

//~element.attribute=value

main.classList.add("box"); //? Add class name
main.className="container"; //? Change class name
main.id="heading"; //? Change id name

//~element.style.property=value
main.style.color="red"; //? Change style

//~element.setAttribute(attribute, value)
main.setAttribute("id","heading"); //? Change/set attribute
main.setAttribute("type","button");//?Change type div to button

//~element.removeAttribute(attribute)
main.removeAttribute("id"); //? Remove attribute

//~element.appendChild(node)
main.appendChild(tag); //? Add element inside element

//~element.remove()
main.remove(); //? Remove element

//~element.insertAdjacentElement(position, node)
main.insertAdjacentElement("afterbegin",div); //? Add div before main
main.insertAdjacentElement("beforeend",div); //? Add div after main

//~element.insertAdjacentHTML(position, html)
main.insertAdjacentHTML("beforeend","<div class='container'>Pranjal</div>"); //? Add div after main

//~element.select()
main.select(); //? Select text inside element





//!Add elements
let div=document.createElement("div");
main.appendChild(div);

//!Remove elements
main.removeChild(div);


//!Replace elements
main.replaceChild(div,main); //?(new,old) Replace div with main



//!Traversing the DOM
//? node.childNodes – accesses the child nodes of a selected parent
//? ● node.firstChild – accesses the first child of a selected parent
//? ● node.lastChild – accesses the last child of a selected parent.
//? ● node.parentNode – accesses the parent of a selected child node.
//? ● node.nextSibling – accesses the next consecutive element (sibling) of a
//? selected element.
//? ● node.previousSibling – accesses the previous element (sibling) of a selected element
main.firstChild; //? First child








//!Events
//* When JavaScript is used in HTML pages, JavaScript can "react" on these events.
//! Common HTML Events
//? onchange	An HTML element has been changed
//? onclick	The user clicks an HTML element
//? onmouseover	The user moves the mouse over an HTML element
//? onmouseout	The user moves the mouse away from an HTML element
//? onkeydown	The user pushes a keyboard key
//? onload	The browser has finished loading the page
//? onsubmit	The user submits some form data
//? onfocus	The user focuses on an HTML element
//? onblur	The user removes focus from an HTML element
//? onresize	The user resizes an HTML element
//? onscroll	The user scrolls in an HTML element
//? onselect	The user selects some text
//? onerror	An error occurs when loading a document or an image
//? oninput	The user changes the content of an HTML element
//.....

alert("TimeOut");//* Do not return any things(undefind)
let name=prompt("Pranjal","Guest") //* (messege,default arg) same as alert with return value
let chk=confirm("Are you sure") //* (messege) return true or false (alert warning oK or Cancle)

//!Event Listener 
//* The addEventListener() method attaches an event handler to the specified element.
//* The addEventListener() method attaches an event handler to an element without overwriting existing event handlers.
//* You can add many event handlers to one element.
//* You can add many event handlers of the same type to one element, i.e two "click" events.

//~element.addEventListener(event, function, useCapture)
//~element.removeEventListener(event, function, useCapture)
//? event: A String that specifies the name of the event.
//? function: A function to be executed when the event occurs.
//? useCapture: A Boolean value that specifies whether the event should occur in the capturing or
//? bubbling phase of the event propagation. 
//?Default is false(bubbling).

//!Event Bubbling
//* Event bubbling is a type of event propagation where the event first triggers on the innermost target element, and then successively triggers on the ancestors (parents) of the target element in the same nesting hierarchy.
//* Event bubbling is the default behavior of the browser.

//!Event Capturing
//* Event capturing is a type of event propagation where the event is first captured by the outermost element and then successively triggers on the descendants (children) of the target element in the same nesting hierarchy.


function hide(event){

    document.getElementById("box").style.color="red";
}
let box=document.getElementById("box"); //!if us do not make varibale it auto point to its id
box.addEventListener("mouseover",hide);
box.removeEventListener("mouseover",hide);

function change(event){
    
    //~Event Object
    //? event.target – The element that triggered the event.
    //? event.currentTarget – The element on which the event handler is being attached.
    //? event.type – The type of event.
    //? event.bubbles – A Boolean value that specifies whether the event bubbles up the DOM tree.
    //? event.cancelable – A Boolean value that specifies whether the event can be canceled.
    //? event.timeStamp – The time (in milliseconds) at which the event occurred.
    //? event.defaultPrevented – A Boolean value that specifies whether the default action has been prevented.
    //? event.preventDefault() – Prevents the default action of the event.
    //? event.stopImmediatePropagation() – Prevents the event from propagating to other listeners.
    //? event.stopPropagation() – Prevents the event from propagating to other listeners.
    //? event.stop() – Prevents the event from propagating to other listeners.
    //? event.isTrusted – A Boolean value that specifies whether the event is trusted or not.
    //? event.detail – The number of times the mouse button was clicked.
    //* https://www.w3schools.com/jsref/obj_event.asp
    //....
}
window.addEventListener("click",change);




//!Local Storage Data Management
function saveData(){
    let data=notesContainer.innerHTML;
    localStorage.setItem("listHTML",data);
}
function showNotes(){
    let data=localStorage.getItem("listHTML");
    notesContainer.innerHTML=data;
}








