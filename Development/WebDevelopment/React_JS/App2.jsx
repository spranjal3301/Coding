import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'




function App() {
  const [count, setCount] = useState(0)

  return (
    <div>

      <CustomButton count={count} setCount={setCount} />  
      {/*//-CustomButton function call passing(argument) props{props.count,props.setCount} to the component*/}

    </div>
  )
}

//!Custom Component
//* Convention: React adopts a convention where component names must begin with a capital letter. 
//* This is how React's JSX processor differentiates between your custom components and built-in HTML tags.

{/*//- <MyComponent /> is recognized as a custom component.
//-     <div /> is recognized as an HTML div element.   */}

//!M01
{/*//- <CompomentName argument1={parameter1}   arg2={parameter1} /> */}


//!M02  
{/*//- <CompomentName argument1={parameter1}   arg2={parameter1} > 

   //`   In this version, you're still passing count and setCount as props to the CustomButton component.
   //`   However, you're also including content between the opening and closing tags.
   //`   This content becomes the children prop within your CustomButton component.
  //`   You can access this content by using props.children within the CustomButton component.

  //- </CompomentName> 
*/}





// !function component
function CustomButton(props) {

  // const [count, setCount] = useState(0)
  function handleClick() {
    props.setCount(props.count + 1);
  }

  return (
    <button onClick={handleClick}>
      count is {props.count}
    </button>
  )
}

//!State Variables
//-We can declare multiple state variables by calling useState multiple times.
//-We can declare under Main App Component and pass as props to other components
//- or  we can declare under each component separately








export default App


