import { createSlice,nanoid} from "@reduxjs/toolkit";

//`Slice:
//* A "slice" refers to a portion of the state or independent piece of data in a Redux store. 
//* anything that you want to track as part of your React app's state.
//* A slice is a collection of Redux reducer logic and actions for a single feature of your app.

//` Reducer
// *A "reducer" is a function that determines how the state of an application changes in response to an action.

//- When using Redux Toolkit, the createSlice function helps you define the reducer functions and the initial state all in one place.
//- The reducer generated by createSlice can then be combined with other reducers to form the root reducer, which is used to create the Redux store.

//- In Redux-toolkit we can diretly update state because it use :
// use Immer inside to allow us to write "mutating" update logic that becomes correct immutable updates.

const initialState={
    username:"",
    password:"",
}

const signinSlice=createSlice({
    name:"signin", //?unqiue  name of the slice
    initialState,
    reducers:{ //? functions that are used to update the state of the slice

        setUsername:(state,action)=>{ 
            //? {state,action} are the always the default parameters of the reducer function
            //? state is the current state of the slice
            //? action is the payload that is passed to the reducer
            state.username=action.payload; //? diretly update 
        },
        setPassword:(state,action)=>{
            state.password=action.payload;
        }
    }
})

export const {setUsername,setPassword}=signinSlice.actions; //? use in the component to dispatch the action
export default signinSlice.reducer //? use this reducer to create the root reducer in the store