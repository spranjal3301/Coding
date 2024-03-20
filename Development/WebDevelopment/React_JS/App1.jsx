import { useState } from 'react'
import './App.css'



function App() {//!function component


  //!Declare a new state variable
  const [count, setCount] = useState(0) //~useState(initialState) returns an array with 2 elements 
  //- count is the current state value
  //- setCount is the function that updates the state value
  //! *** To update the state, call setCount with a new state value



    function handleClick() {
      //`Never update the state variable directly (count = count + 1)
      setCount(count + 1)//!setCount(new state value)
    }



//- Put Curly braces to use JavaScript inside JSX 
//-example : count is {count},onClick={fn}
//*onClick={fn name} do not call() the function, just pass the reference
//* 
  return (
      <div>
       
        <button onClick={handleClick}>
          count is {count}
        </button>
        
    </div>

  )
}

export default App


// const [count, setCount] = useState(0)
//- useState Hook in React always returns an array with two elements:

//* The current state variable: In your example, this is count. It holds the current value of the state.

// *A state updater function:  In your example,  this is setCount. This function is used to change the state value,
//*triggering React to re-render your component with the updated state.

//-We can declare multiple state variables by calling useState multiple times.
//-We can declare under Main App Component and pass as props to other components
//- or  we can declare under each component separately

