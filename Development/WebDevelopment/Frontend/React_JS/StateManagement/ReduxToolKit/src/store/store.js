import { configureStore } from "@reduxjs/toolkit";
import signinReducer from "../features/Signin/signinSlice";
import todoReducer from "../features/todo/todoSlice";
import counterReducer from "../features/Counter/counterSlice"


export const store=configureStore({
    reducer:{
        signin:signinReducer,
        todo:todoReducer,
        counter: counterReducer,
    },
});

export default store;