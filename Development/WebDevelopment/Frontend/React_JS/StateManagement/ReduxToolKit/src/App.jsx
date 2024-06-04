import React from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './features/Counter/counterSlice';


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
