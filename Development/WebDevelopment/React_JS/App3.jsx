import React, { useState } from 'react'
import './App.css'

//!React.memo , Re-rendering ,Keys,Wapper Components -->  

function App() {
  const [title, setCount] = useState(0)

  function onclickHandlar(){
    setCount(Math.random);
  }

  return (
    <div>
      <button onClick={onclickHandlar}>click</button>
      <MemoizedHeader title={title}/>
      <MemoizedHeader title={"HELLO WORLD!!"}></MemoizedHeader>  //`Do not  re-render this component
      <MemoizedHeader title={"HELLO WORLD!!"}></MemoizedHeader> //`if the props have not changed #React.memo()
      <MemoizedHeader title={"HELLO WORLD!!"}></MemoizedHeader>
      
      {/* <Header/>
      <h1>HELLO WORLD!!</h1> */}
    </div>
  )
}

//!M01 Reduce Re-rendering
function Header(props){

  const [title, setCount] = useState(0)
  function onclickHandlar(){
    setCount(Math.random);
  }
  return (
    <div>
      <button onClick={onclickHandlar}>click</button>
      <h1>{title}</h1>
    </div>
  )
}


//!M02 Reduce Re-rendering
const MemoizedHeader = React.memo(
  function Header({title}){

    return (
      <div>
        <h1>{title}</h1>
      </div>
    )
  }
);



//!Re-rendering:
//* State1--->State2(Re-rendering)
//*When the state changes, the component re-renders to reflect the new state.

//-When Re-rendering happens
//*1.State Variable inside Component changed (State fn called).
//*2.Parent Component re-rendered triggers all child component re-rendering

//-Re-rendering is not always bad
//*1. It is necessary to update the UI when the state changes.
//*2. It is necessary to reflect the changes in the UI when the props change.


//!Reconciliation
//* React reconciliation is the process of comparing the current state of the UI with the desired state,
//* and updating the UI to match. 
//* This is done by comparing the virtual DOM with the real DOM, and making the necessary changes to the real DOM.

//? update=>reconciliation=>re-rendering=>DOM update
//? Reconcilation = |Virtual Dom - Real Dom|

//!Virtual DOM
//* React creates a virtual representation of the actual DOM in memory.
//* When changes are needed, React intelligently analyzes the Virtual DOM,
//* determines the minimal updates necessary for the real DOM, and executes only those.


//~Reduce Re-rendering as much as possible

//!How to minimize re-rendering?
//-1.Defind State in the lowest possible component.
//?If a state variable is defined in a parent component, all child components will re-render when the state changes.

//-2.Use React.memo() to prevent re-rendering of the component.
//?React.memo is a higher-order component (HOC:  accepts component and/or returns a new component) 
//?that tells React to skip rendering the component if its props have not changed.

//Example:
// const MyComponent = ({ props }) => {
//    ...
// };

// const MemoizedMyComponent = React.memo(MyComponent);






//!Keys in React
//*Keys uniquely identify elements in a Array.
//*Keys help React identify which items have changed, are added, or are removed.
//* When you use keys, React can track changes to the list more efficiently and update the DOM only when necessary.
//* This can improve the performance of your React application, especially when you have large lists.

function app1() {
  const [todos, setTodos] = useState([{
    id: 1,
    title: "Go to gym",
    description: "Need to hit the gym from 7-9PM"
  }, {
    id: 2,
    title: "Go to Clas",
    description: "Need to go to the class from 4-7 PM"
  }, {
    id: 3,
    title: "Eat foor",
    description: "Need to eat food from 2-4 PM"
  }])


  return (
    <div>
      {todos.map(todo => <Todo  key={todo.id}    title={todo.title} description={todo.description} />)}
    </div>
  )
}





//!Wrapper Components (Higher Order Components)
//-Takes Component as a prop and returns a new Component
function App() {
  return(
    <>
    {/*//-Syntax1 --innerComponent*/}
    <CardWrapper innerComponent={<TextComponent/>}/>
    
    {/*//- Syntax2 --children*/}
    <CardWrapper> <TextComponent/> </CardWrapper>
    </>
    )
}

function TextComponent(){
  return <div>
    <h1>Hello World</h1>
  </div>
}

function CardWrapper({innerComponent, children}){
  return(
    <div style={{border: '1px solid red', padding: '10px'}}>
      {innerComponent}
      {children}
    </div>
  )
}



//! React Portals
//? React Portals provide a first-class way to render components into a DOM node that exists
//? outside the standard DOM hierarchy of your parent component.
//? In essence, they allow you to "break out" of the normal React rendering flow and insert 
//? UI elements into a different location within the overall HTML document.

//? ReactDOM.createPortal(React component,  DOM element);







export default App