import { useEffect, useState } from "react";
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from 'react-icons/bs'

const URl='https://picsum.photos/v2/list?page=1&limit=5';
const style={
    content:{
        width:"800px",
        borderRadius:"0.5rem"
    },
    container:{
        display:'flex',
        flexDirection:'row'
    },
    arrow:{
        width:'2rem',
        height:'2rem',
        position:'absolute',
        color:'#fff'
    },
    leftArrow:{
        left:'1rem',
    },
    rightArrow:{
        right:'1rem'
    },
    circleIndicators:{
        display: "flex",
        position: "absolute",
        bottom: '1rem',
    },
    currentIndicator:{
        backgroundColor:'#fff',
        height: '15px',
        width: '15px',
        borderRadius:'0.5rem',
        outline: 'none',
        border: 'none',
        margin: '0 0.2rem'
    },
    hidcontent:{
        display:'none'
    },
    ActcurrentIndicator:{
        backgroundColor:'gray'
    
    }
}

function ImageSlider(){
    const [images,setImages]=useState([]);
    const [currSlider,setCurrSlider]=useState(0);

    const fetchImg=async ()=>{
        const res=await fetch(URl);
        const data=await res.json();
        console.log(data);
        setImages(data);
    }
    useEffect(()=>{
        if(URl!='')fetchImg();
    },[URl])


    const handleNext=()=>{
        setCurrSlider((prev)=>{
            if(prev===images.length-1)return 0;
            return prev+1;
        })
    }

    const handlePrev=()=>{
        setCurrSlider(prev=>{
            if(prev===0)return images.length-1;
            return prev-1;
        })
    }


    return (
        <div style={style.container}>
            <BsArrowLeftCircleFill onClick={handlePrev} style={{...style.arrow,...style.leftArrow}}/>
            {images.map((content,idx)=>{ 
                return <img key={content.id} src={content.download_url} alt="😒"  
                style={idx==currSlider?style.content:style.hidcontent}/>
            })}
            <BsArrowRightCircleFill onClick={handleNext} style={{...style.arrow,...style.rightArrow}}/>
            
            <span style={style.circleIndicators}>
                {images.map((_,idx)=>{
                    return <button key={idx} 
                    style={idx==currSlider?{...style.currentIndicator ,...style.ActcurrentIndicator}:style.currentIndicator} onClick={()=>setCurrSlider(idx)}></button>
                })}
            </span>
          
        </div>
    )
}


export default ImageSlider;