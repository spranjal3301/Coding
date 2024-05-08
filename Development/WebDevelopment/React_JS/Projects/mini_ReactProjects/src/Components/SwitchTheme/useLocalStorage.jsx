import { useState,useEffect } from "react";


function useLocalStorage(key,Defaultvalue){
    const [value,setValue]=useState(()=>{
        const item=localStorage.getItem(key);
        return item?JSON.parse(item):Defaultvalue;
    });

    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(value));
    },[key,value]);

    return [value,setValue];
}

export default useLocalStorage;