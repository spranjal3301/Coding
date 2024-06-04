//!Asynchronous Data Fetching in Recoil

import {atom,selector} from 'recoil';

const AtomeName=atom({
    key:'AtomKey',
    default:selector({  //-Selector as default value for async data fetching
        key:'SelectorKey',
        get:async()=>{
            const response=await fetch(URL);
            const data=await response.json();
            return data;
        }
    })
})




//! AtomFamily?

//- Generating Multiple Atoms Based on a Parameter: An atomFamily acts like a factory function that generates
//- individual atoms on demand, where each atom is uniquely associated with a provided parameter.

//- Think of it as a Template: The atomFamily defines the "blueprint" (structure and default value) for atoms
//- it will create but doesn't itself hold any state.

//- Managing Similar State for Multiple Instances: Let's say you have a list of items, and each item needs its own
//- piece of state

import { atomFamily, selectorFamily } from 'recoil';

const todoList= [
    {id:1, text:'Learn Recoil'},
    {id:2, text:'Build a project'},
    {id:3, text:'Deploy the project'}
];

const todoStateFamily = atomFamily({
  key: 'todoStateFamily',
  default: id=>{
    return todoList.find(todo => todo.id === id);  //Assuming todoList is an array of todo objects
  }
});

function TodoItem({ todoId }) {
    const [todo, setTodo] = useRecoilState(todoStateFamily(todoId));
  
    // ... component logic to display and update the todo
  }



//! SelectorFamily

//* Dynamic Selectors: Similar to atomFamily, a selectorFamily function generates a family of related selectors. Each individual selector is associated with a unique parameter.
//* Parameter-Based Logic: They let you write calculation and data-transformation logic that depends on a parameter, providing dynamic derived state.

const usersState = atom({  // Some way to define your list of users
    key: 'usersState',
    default: [ 
        { id: 1, name: 'Alice', role: 'Admin'},
        { id: 2, name: 'Bob', role: 'Editor'},
     ],
  });
  
  const filteredUsersSelector = selectorFamily({
    key: 'filteredUsersSelector',
    get: (role) => ({ get }) => {
      return get(usersState).filter(user => user.role === role); 
    }
  });

function AdminUsers() {
    const adminUsers = useRecoilValue(filteredUsersSelector('Admin')); 
    // adminUsers will contain only those with the 'Admin' role

}


//?Example: Fetching Data and filtering based on ID
const todosAtomFamily = atomFamily({
    key:'todosAtomFamily',
    default: selectorFamily({
        key:'todosSelectorFamily',
        get:(id)=> async ()=>{
            const response=await fetch(URL+id);
            const data=await response.json();
            return data;
        }
    })
})

function TodoItem({todoId}){
    const todo=useRecoilValue(todosAtomFamily(todoId));
    return <div>{todo.text}</div>
}


//!useRecoilStateLoadable

//- The useRecoilStateLoadable hook is a variation of useRecoilState that returns a Loadable object instead of the value directly.

//- Loadable objects are a Recoil concept that represents the state of an asynchronous value.
//* They can be in one of three states: 
//? hasValue,
//? loading, or 
//? hasError.

//*useRecoilValueLoadable
//* The useRecoilValueLoadable hook is a variation of useRecoilValue that returns a Loadable object instead of the value directly.

import { useRecoilStateLoadable } from 'recoil';

function AsyncComponent() {
    const [loadable, setLoadable] = useRecoilStateLoadable(myAtom);
    const loadable1 = useRecoilValueLoadable(myAtom);
  
    if (loadable.state === 'hasValue') {
      return <div>{loadable.contents}</div>;
    }
    else if (loadable.state === 'loading') {
      return <div>Loading...</div>;
    } 
    else {
      return <div>Error: {loadable.contents.message}</div>;
    }
  }

