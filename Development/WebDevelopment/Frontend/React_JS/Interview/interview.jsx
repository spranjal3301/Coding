//! What is React Component Lifecycle ?
//*  React components follow a cycle. They are created (mounted), they are grown(updated),
//*  and they die (unmounting).This is nothing but called a component lifecycle.


//`Three different phases in its Component lifecycle
//-* Mounting (initial render)
        //? The mounting phase is when a new component is created and it is inserted into the DOM
        //? To get through this phase, four lifecycle methods are called:
        //-   constructor : mostly used for initializing the state of the component
        //-   static getDerivedStateFromProps : used to set the state based on the props
        //-   render : used to render the component ( inserts all HTML into the DOM.)
        //-   componentDidMount : used to perform side effects like fetching data or subscribing to events
//-* Updating
//-* Unmounting








//! How to handle if fetch api takes long time ?
//- 1. Implement Loading Indicators
//- 2. Utilize Caching Mechanisms (React Query, SWR)
//- 3. Optimize API Calls (Debounce or Throttle API Requests)
//- 4. Use Web Workers
//- 5. Implement Pagination or Infinite Scrolling
//- 6. Pre-fetch Data
//- 7. Use AbortController to Cancel Unnecessary Requests



//! React Performace Metrics
    //* 1. First Contentful Paint (FCP): Time taken for the first piece of content to render on the screen.
    //* 2. Time to Interactive (TTI): Time taken for the page to become fully interactive.
    //* 3. Largest Contentful Paint (LCP): Time taken for the largest content element to render.
    //* 4. Cumulative Layout Shift (CLS): Measures visual stability and how much the layout shifts during loading.
    //* 5. Speed Index: Measures how quickly the contents of a page are visibly populated.
    //* 6. Total Blocking Time (TBT): Sum of all time periods between FCP and TTI when the main thread was blocked.



    
//! React performance optimization techniques
//* 1. Use useMemo and useCallback Hooks
//* 2. Code Splitting
//* 3. Lazy Loading
//* 4. Avoid Inline Functions in Render 
        //* (Each time a component re-renders, new inline functions are created.
        //*  This can lead to unnecessary re-renders of child components)










//! What is the difference between controlled and uncontrolled components in React?
//- Controlled Components
    //* form data is managed by React state. The component's state serves as the "single source of truth,"
    //* ensuring that the UI and data are always in sync.
    import React, { useState } from 'react';

    function ControlledInput() {
    const [value, setValue] = useState('');

    const handleChange = (e) => setValue(e.target.value);

    return (
        <input type="text" value={value} onChange={handleChange} />
    );
    }

//- Uncontrolled Components
    //* Uncontrolled components manage their own state internally.
    //* Instead of relying on React state, they use the DOM to handle form data.
    function UncontrolledInput() {
    const inputRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Input value: ${inputRef.current.value}`);
    };

    return (
        <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} />
        <button type="submit">Submit</button>
        </form>
    );
    }

//- Controlled Components: Opt for these when you need real-time validation, dynamic inputs, or when form data needs to be accessed or modified frequently. They provide better control and are more predictable.
//- Uncontrolled Components: Suitable for simple forms, quick prototyping, or when integrating with third-party libraries that manipulate the DOM directly. They require less code but offer less control.





//! What is the difference between functional and class components in React?
//* Functional Components: Simplified Syntax, Hooks, 
//* Class Components: Lifecycle Methods(componentDidMount, componentDidUpdate, and componentWillUnmount.), State Management, Error Boundaries: 



//! Types of Tests in React:
//* 1. Unit Testing: Focuses on individual components or functions in isolation. Ideal for testing pure functions and simple components. 
//* 2. Integration Testing: Ensures that multiple components or modules work together as expected. Useful for testing component interactions and data flow.
//* 3. End-to-End (E2E) Testing: Simulates real user interactions across the entire application, verifying that the system works as a whole.



//! What is Error Boundary in React?
//* Error boundaries are React components that catch JavaScript errors in their child component tree,
//* log those errors, and display a fallback UI instead of crashing the entire component tree. 


//! What is react fiber and reconciliation


//! How to insure security in react app