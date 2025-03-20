import React from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './features/Counter/counterSlice';


//- Component/Part of Redux:
//? 1.store: central place for managing all state and action and providing to subscribe components
//? 2.slice: a portion of the state or independent piece of data in a Redux store.(a feature of your app) 
//? reducer: function that determines how the state changes in response to an action


function App() {
  //? useSelector is a hook that allows you to extract data from the Redux store state, using a selector function.
  const count = useSelector((state) => state.counter.value);  //?state.storeName
  const dispatch = useDispatch(); 

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </>
  );
};

export default App;
