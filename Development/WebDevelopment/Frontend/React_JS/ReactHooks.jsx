import React, { forwardRef, useEffect, useMemo, useState } from 'react'
import './App.css'



//!React Hooks
//- React Hooks are functions that let you hook into React state and lifecycle features from function components.


//!Commonly used React Hooks
//* useState: - This hook lets you add React state to function components.
//* useEffect: - This hook lets you perform side effects in function components.
//* useMemo: - This hook lets you memoize values in function components.
//* useCallback: - This hook lets you memoize functions in function components.
//* useRef: - This hook lets you create a mutable ref object in function components.
//* useContext: - This hook lets you use context in function components.
//* useReducer: - This hook lets you use a reducer to manage state in function components.
function App() {


  //! useState:
  //- useState is a Hook that allows you to have state variables in functional components and CustomHooks only.
  //- useState returns an array with two elements.
  //- The first element is the current value of the state, and the second element is a function that lets you update it.
  //- When you call the function returned by useState, the component will re-render.

  //? Syntax
  //? const [state, setState_Fn] = useState(initialState)
  const [count, setCount] = useState(0)

  //!Side Effects
//- Side effects are actions your application takes outside of React components(not related to rendering).
//? Data fetching,setTimeout,setInterval,setting up a subscription, and manually changing the DOM in React components.
  

  //! useEffect:
  //- The Effect Hook lets you perform side effects in function components.
  //- By using this Hook, you tell React that your component needs to do something after render.
  //- React will remember the function you passed (we'll refer to it as our “effect”),
  //- and call it later after performing the DOM updates.
  //- By default, effects run after every completed render, but you can choose to fire them only when certain values have changed.

  //? Syntax
  //? useEffect(EffectFunction, [dependenciesArray])
  //- The first argument is the function that contains the side effect logic.
  //- The second argument is an array of dependencies(when the side effect logic should run).
  //* If the array is empty [], the effect will only run after the first render.
  //* If the array contains elements [count], the effect will only run when these elements change.

  useEffect(() => {
    document.title = `You clicked ${count} times`
  }, [count])

  useEffect(()=>{  //~can not use async await in useEffect

    (async function (){  //~IIFE
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      const data = await response.json()
      console.log(data)
    })();
  },[])


  //`useEffect cleanup
  //- When you return a function from the effect, React will run it when it is time to clean up.
  //- This cleanup is necessary to prevent memory leaks.
  //- called when a component that uses the useEffect hook is removed from the screen
  //* examples of how to use the useEffect cleanup function:
  //? Canceling a fetch request, Cleaning up timeouts, Cleaning up intervals, and Cleaning up event listeners.
  useEffect(() => {
    //~Debounce the Request with Cleanup
    const interval = setInterval(() => {
      console.log('This will run every second!')
    }, 1000)

    return () => clearInterval(interval)//~cleanup function
  }, [])

  //`Axios cleanup
  //- If you are using Axios for data fetching, you can cancel the request by using the CancelToken API.
  //- The cleanup function will cancel the request when the component unmounts.

  useEffect(()=>{
    //~One Request for Multipal click with cleanup
    const controller = new AbortController()
    const signal = controller.signal

    (async()=>{
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', { signal })
        console.log(response.data)
      } catch (error) {
        if(axios.isCancel(error))
          console.log('Request canceled', error.message)
      }
    })();

      return () => controller.abort();

  })

  //~ useLayoutEffect is similar to useEffect, but it fires synchronously after all DOM mutations.


  //! useMemo:
  //- useMemo is a hook that memorizes the output of a function.
  //-Same as memoization in dp
  //-does not recompute the value unless one of the dependencies has changed.
  //*you can also use useEffect to achieve the same result, but useMemo is more efficient.
  //`Real-World Use Cases: Filtering, sorting, or transforming large datasets,Formatting data
  //`Referential Equality Optimizations:
  //`Preventing child component re-renders: If you pass a complex object or array as a prop to a child component,
  //` it might cause unnecessary re-renders even if the content of the data hasn't changed



  //? Syntax
  //? const memoizedValue = useMemo(functionReturnExpensiveCalResult, [dependenciesArray]);
  //? const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
  //- The first argument is the function that contains the expensive calculation want to memorizes.
  //- The second argument is an array of dependencies(when the expensive calculation logic should run).
  //* If the array is empty [], the effect will only run after the first render.
  //* If the array contains elements [count], the effect will only run when these elements change.


  const  memoizedValue = useMemo(() => {
    return count * 2
  }, [count]);

  const memoizedComplexProp = useMemo(() => ({ 
    data: complexData, 
    config: someConfig 
 }), [complexData, someConfig]);

  <ChildComponent prop={memoizedComplexProp} />


  //!useCallback:
  //- useCallback is a hook that returns a memoized version of the callback function that only 
  //-changes if one of the dependencies has changed.
  //-useCallback is useful when passing callbacks fn to optimized child components that rely on reference equality to prevent unnecessary renders.
  //*If we pass a fn^ to the  ChildComponent and ChildComponent uses React.memo, the ChildComponent will re-render 
  //*every time the parent component re-renders because the fn^ is a new reference every time the parent re-renders.
  //*useCallback will return the same reference to the fn^ unless the dependencies change.


  //? Syntax
  //? const memoizedCallback = useCallback(() => {fn}, [dependenciesArray]);
  //- The first argument is the function that contains the callback logic.
  //- The second argument is an array of dependencies(when the callback logic should run).
  
  const memoizedOnClick = useCallback(() => {
    console.log('Item clicked');
}, []); 

<ChildComponent prop={memoizedOnClick} />



//!useRef:
//- useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue).
//- The returned object will persist for the full lifetime of the component.
//- useRef is useful for accessing DOM nodes or persisting values between renders without causing a re-render.
//*useRef is like a “box” that can hold a mutable value in its .current property. 

//~useRef to access DOM elements

//? Syntax
//? const refContainer = useRef(initialValue);

  {
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current= 'Hello, World!';
    }, []); 


  <input type="text" ref={inputRef} />
  }

  {
    const [count, setCount] = useState(0);

    const numberOfTimesReRendered = useRef(0);

    const handleReRender = () => {
        // Update state to force re-render
        setCount(count + 1);
    };

    numberOfTimesReRendered.current = numberOfTimesReRendered.current + 1;

    return (
        <div>
            <p>This component has rendered {numberOfTimesReRendered.current} times.</p>
            <button onClick={handleReRender}>Force Re-render</button>
        </div>
    );
  }


  //!forwardRef
  //- forwardRef is a higher-order component that allows you to access the ref object passed to it.
  //- passing Ref of componenet from child to parent

  //? Syntax
  //? const Component = forwardRef((props, ref) => {return <input ref={ref} />;});

 
 
}






export default App