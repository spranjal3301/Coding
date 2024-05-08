import { useState } from 'react';
import {FaStar} from 'react-icons/fa'

function StarRating({noOfStar=5}){

    const [rating,setRating]=useState(0);
    const [hover,setHover]=useState(0);

    const Stars=Array.from({length:noOfStar});//?Empty array of length :noOfStar
    const style={
        starActive:{
            width:"50px",
            height:"50px",
            color:"#000000",
        },
        starInactive:{
            width:"50px",
            height:"50px",
            color:"#FFFFFF",
        },
    }

    function handleClick(idx){
        setRating(idx);
    }
    function handleMouseMove(idx){
        setHover(idx);
    }
    function handleMoveLeave(){
        setHover(rating);
    }

    return (
        <div >
            {
                Stars.map((_,idx)=>{
                    idx++
                    return <FaStar style={idx<=Math.max(hover,rating)?style.starActive:style.starInactive}
                    key={idx}
                    onClick={()=>handleClick(idx)}
                    onMouseMove={()=>handleMouseMove(idx)}
                    onMouseLeave={()=>handleMoveLeave()}
                    />
                })
            }
        </div>
    )
}

export default StarRating;