
//!Recoil
//* state management library for React applications.
//* It introduces a more sophisticated approach to handling state, offering features like atoms, selectors, and a global state tree.
//* Recoil is designed to be flexible, efficient, and scalable, making it a great choice for large-scale applications.
//* Only Re-render the components that use atoms that have changed no Prop drilling.

//?Do not use Recoil for small applications or One time used state, as it may introduce unnecessary complexity.

//-Key Features:
//* Atoms: (like State)
//? An atom represents a single, independent piece of data in your application.
//? anything that you want to track as part of your React app's state.
//? Unique Key: Each atom must have a unique key. This key identifies the atom within your Recoil state system.
//? Default Value: You define the initial value that the atom will hold when it's created.

const AtomName = atom({
    key: 'AtomName',
    default: 0,//Initial Value 0,'',[],{}
});

//-Use according to the requirement:
//*useRecoilState:
//?Same as useSate, but it's used to read and write the value of an atom.
const [count, setCount] = useRecoilState(counterAtom);

//*useRecoilValue:
//?Used to read the value of an atom or selector.
//~ const count = useRecoilValue(counterState);

//*useSetRecoilState:
//?Used to write(based on prev value) the value of an atom.
//~ const setCount = useSetRecoilState(counterState);

//* RecoilRoot:
// ?This acts as a global provider, making Recoil atoms accessible throughout your component tree.
//? Wrap your top-level component or where you want to use with RecoilRoot:

//*Selectors: (like useMemo)
//- A selector represents a piece of derived state from atom .
//? Selectors are derived state, computed from atoms or other selectors.
//? Selectors cache their results. If the same selector is called with the same dependencies (atoms or other selectors), it returns the cached result instead of recomputing. This optimizes performance.

//- Why Use Selectors?
//? Encapsulation of Logic
//? Performance: Memoization

//- Selector Types
//? Read-only Selector (get only): Returns a value based on state.
//? Writeable Selector (get and set): Provides both a way to read the current value and a mechanism to update dependencies of the selector.

const SelectorName= selector({
    key: 'SelectorName',
    get: ({get}) => {   //- props={get}
        const StateValue = get(AtomName);
        //Operations
        return newValue;
    },
    set: ({set}, newValue) => {
        set(AtomName, newValue);
    }
});

function ComponentName(){
  const value=useRecoilValue(SelectorName);
  
  return <div>{value}</div>
}




//-How to use Recoil:
// npm install recoil


//* Create an Atom:
//Path: store/atoms/count.jsx

import { atom } from 'recoil';

export const counterAtom = atom({
    key: 'counterAtom', // Unique key for this atom
    default: 0,          // Initial value of the counter (Initial State)
});

//* Create a Component
// Here's a component using this atom (e.g., Components/CounterComponent.jsx):

// This hook inside the component allows us to both read the current count value and obtain a setter function (setCount) to update the state of the atom.
import { useRecoilState } from 'recoil'; 
import { counterState } from './counterAtom'; 

function CounterComponent() {
    const [count, setCount] = useRecoilState(counterState);

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

//* Include RecoilRoot
//? Wrap your top-level component or where you want to use with RecoilRoot:
function App(){

    return(
      <RecoilRoot>
        <CounterComponent /> 
      </RecoilRoot>
    )
}

//* Create a Selector
//Path: store/selectors/isEvenSelector.jsx

import { selector } from 'recoil';
import { counterState } from '../atoms/counterAtom';

export const isEvenSelector = selector({
    key: 'isEvenSelector',
    get: (props) => {
        const count = props.get(counterState);
        return count % 2 === 0;
    },
    // get: ({ get }) => {
    //     const count = get(counterState);
    //     return count % 2 === 0;
    // },
});

function EvenComponent() {
    const isEven = useRecoilValue(isEvenSelector);

    return <div>{isEven ? 'Even' : 'Odd'}</div>;
}





//------------------------------------------------------------------------


import { useContext, useMemo, useState } from "react"
import { CountContext } from "./context";
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom, evenSelector } from "../store/atoms/count";

function App() {
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  )
}

function Count() {
  console.log("re-render");
  return <div>
    <CountRenderer />
    <Buttons />
  </div>
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);
  
  return <div>
    <b>
      {count}
    </b>
    <EvenCountRenderer />
  </div>
}

function EvenCountRenderer() {
  const isEven = useRecoilValue(evenSelector);

  return <div>
    {isEven ? "It is even" : null}
  </div>
}

function Buttons() {
  const setCount = useSetRecoilState(countAtom);
  console.log("buttons re-rendererd");

  return <div>
    <button onClick={() => {
      setCount(count => count + 1)
    }}>Increase</button>

    <button onClick={() => {
      setCount(count => count - 1)
    }}>Decrease</button>
  </div>
}

