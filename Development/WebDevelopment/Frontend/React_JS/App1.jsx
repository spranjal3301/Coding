import { useState } from 'react'
import './App.css'

//! State Variables, Return , JSX, Class vs className

//- "rfce" --- react boilerplate pages
//- "rfc" --- react boilerplate components

//!Main component
function App() {

  //!Declare a new state variable
  const [count, setCount] = useState(0) //~useState(initialState) returns an array with 2 elements 
  //- count is the current state value
  //- setCount is the function that updates the state value
  //! *** To update the state, call setCount with a new state valuez


function handleClick() {
  //`Never update the state variable directly (count = count + 1)
    setCount(count + 1)//*setCount(new state value) 
  }


  return (
      <div style={styles.card}>
       
        <button  style={{padding:10}} onClick={handleClick}>
          count is {count}
        </button>
        
    </div>

  )
  
}



//!React Handles Re-rendering
//-update the state variable twice in a row, 
//!M01
setCount(newValue)
setCount(count + 1) //`0+1=1`
setCount(count + 1) //`0+1=1`
//* React batches these two updates together. Instead of performing two separate re-renders,
//* it essentially combines them into a single update where the count is incremented twice from its initial value of 0.

//- Solution: Functional Updates
//!M02
setCount(currCount => newValue) //~setCount(Callback function)
setCount(currCount => currCount + 1)
setCount(currCount => currCount + 1)
//-IN this Syntax React automatic pass latest/current value to the callback function
//* React guarantees that the callback function will receive the latest value of the state variable.
//* React is designed to handle updates to state variables in a way that ensures the correct values are used.
//* When you call setCount with a callback function,


//***! setFn always called with new value {setCount(newValue)} make copy of state varible {copy=stateVar,copy=[...stateVar],copy={...stateVar}} or use M02 (preStateVar)



//!Return 
//*We can only return one XML element (return <div></div>)
//* React builds a tree-like structure of your UI (components within components).
//* A single root element ensures every component fits within this tree for clear and maintainable organization.

//!Return multiple elements Techniques

//- Wrapping in a Container Element:
// return (
//   <div> 
//     <p>Paragraph 1</p>
//     <p>Paragraph 2</p> 
//   </div>
// );


//- React Fragments:  Fragments let you group elements without adding an extra node to the DOM.
// return (
//   <>
//     <p>Paragraph 1</p>
//     <p>Paragraph 2</p> 
//   </>  
// );


//- Arrays:
// return [
//   <p key="1">Paragraph 1</p>, // Keys are important for lists
//   <p key="2">Paragraph 2</p> 
// ];






//!JSX(Javascript XML)
//- Put Curly braces to use "JavaScript" inside XML
//-example : count is {count},onClick={fn}
//*onClick={fn name} do not call() the function, just pass the reference
//`Every Js ans Css properties and function in camalCase (onclick->onClick) 


//-Put double Curly braces to use "CSS" inside XML
//?Example1: style={{padding:10,margin:10}}
//?Example2 <div style={styles.card}> 
const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
  }
};

//?Example3: <div className="App">  
//*same as class in HTML defind in App.css file .App{color:red}

//-Class vs className
//*In React, use className instead of class to define CSS classes in JSX.
//*The class keyword is reserved in JavaScript, so JSX uses className to assign CSS classes to elements.



//!What is State in React?
//? State is used to store data that changes over time
//!State Variables
// const [count, setCount] = useState(0)
//- useState Hook in React always returns an array with two elements:

//* The current state variable: In your example, this is count. It holds the current value of the state.

// *A state updater function:  In your example,  this is setCount. This function is used to change the state value,
//*triggering React to re-render your component with the updated state.

//-We can declare multiple state variables by calling useState multiple times.
//-We can declare under Main App Component and pass as props to other components
//- or  we can declare under each component separately


