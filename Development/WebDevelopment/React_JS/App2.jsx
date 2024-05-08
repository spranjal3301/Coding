// import { useState } from 'react'
// import './App.css'

//!Function Component/Custom Component, Props, Children


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>

      <CustomButton count={count} setCount={setCount} />  

    </div>
  )
}



// !function component
function CustomButton(props) {//~Props is object always receive   (Props={count, setCount})
  
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

//!Custom Component
//* Convention: React adopts a convention where component names must begin with a capital letter. 
//* This is how React's JSX processor differentiates between your custom components and built-in HTML tags.

//*CustomButton function call passing(argument) props{props.count,props.setCount} to the component
//* parameter={Argument}


//- <MyComponent /> is recognized as a custom component.
//-     <div /> is recognized as an HTML div element.  


//!Props
//*Props is an object that holds information about the component.
//*props is not a reserved keyword in React. Props is a convention for dev, not a rule.
//* Props in React is a way to pass data from one component to another. Props are immutable



//!Argument passing to the component
//!M01
//- <CompomentName parameter1={Argument1}   parameter2={Argument2}  /> 
//~ access prpos.parameter1, props.parameter2


//!M02  
//- <CompomentName parameter1={Argument1}   parameter2={Argument2}  > 

   //`   In this version, you're still passing count and setCount as props to the CustomButton component.
   //`   However, you're also including content between the opening and closing tags.
   //`   This content becomes the children prop within your CustomButton component.
  //`   You can access this content by using props.children within the CustomButton component.

  //- </CompomentName> 


  function App() {
    const [count, setCount] = useState(0)
    const title="HELLO WORLD!!"
  
    return (
      <>
        <Header title={title}/>
        <Header title={title}></Header>
        <Header>
          {title} //~props.children
        </Header>
        
      </>
    )
  }
  
  function Header(props){
    return (
      <div>
        <h1>{props.title}</h1>
      </div>
    )
  }
  


