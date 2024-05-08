import { useEffect, useState } from "react"
import Randomdata from "./data";
import './style.css'



function ScrollIndicator(){
    const [scrollPrecentage,setScrollPrecentage]=useState(0);

    function handleScrollPrecentage(){
        const howMuchScroll=document.body.scrollTop || document.documentElement.scrollTop;//`.documentElement->root element
        const height=document.documentElement.scrollHeight - document.documentElement.clientHeight;
         //`We subtract the visible height(viewPort) (clientHeight) from the total height (scrollHeight

        setScrollPrecentage((howMuchScroll/height)*100)
    }


    useEffect(()=>{
        window.addEventListener("scroll",handleScrollPrecentage);

        return ()=>{
            window.removeEventListener("scroll",()=>{});
        }
    },[])


    return (
        <div>
      <div className="top-container">
        <h3>Scroll Indicator</h3>
        <div className="scroll-progress-tracking-container">
          <div
            className="current-progress-bar"
            style={{ width: `${scrollPrecentage}%` }}
          ></div>
        </div>
      </div>
      <div className="data-container">
        {Randomdata}
      </div>
    </div>
    )
}


export default ScrollIndicator;