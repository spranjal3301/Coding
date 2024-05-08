import { useState } from "react";
import Randomtext from "./data";
import useLocalStorage from "./useLocalStorage";

const style={
    dark:{
        backgroundColor:' #000000',
        color:'#f1f1f1'
    },
    grey:{
        backgroundColor:'#242424',
        color:'rgba(255, 255, 255, 0.87)'
    },
    light:{
        backgroundColor:'rgba(255, 255, 255, 0.87)',
        color:'#000000'
    }
}

function SwitchThemes(){
    const [theme,setTheme]=useLocalStorage('theme',0);  //? 0-->Dark 1-->Grey 2->light 


    function handleClick(){
       setTheme((prevTheme)=>prevTheme===0?1:prevTheme===1?2:0) 
    }

    return (
        <div style={theme===0?style.dark:theme===1?style.grey:style.light}>
            <p>{Randomtext}</p>
            <button onClick={handleClick}
            style={theme===0?style.dark:theme===1?style.grey:style.light}>{theme===0?'Grey':theme===1?'Light':'Dark'}</button>
        </div>
    )

}

export default SwitchThemes;