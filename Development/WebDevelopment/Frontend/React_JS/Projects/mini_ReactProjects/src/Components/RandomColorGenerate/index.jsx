import { useState } from 'react';


function RCG(){
    const [typeColor,setTypeColor]=useState('hex');
    const [color,setColor]=useState('#000000');

    const style={
        bg:{
            width: '100vw',
            height: '100vh',
            backgroundColor:color,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
        }
    }

    const RandomNum=(length)=>Math.floor(Math.random()*length);

    function handleGR(){
        if(typeColor=='hex'){
            const hex =[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
            let hexColor='#';
            for(let i=0;i<6;i++)
                hexColor+=hex[RandomNum(hex.length)];
            setColor(hexColor);
        }else{
            const R=RandomNum(256);
            const G=RandomNum(256);
            const B=RandomNum(256);
            setColor(`rgb(${R},${G},${B})`);
        }
    }
    
    return (
        <div  style={style.bg}>
            <div>
                <button onClick={()=>setTypeColor('hex')}>Generate Hex</button>
                <button onClick={()=>setTypeColor('rgb')}>Generate RGB</button>
                <button onClick={handleGR}>Generate Random</button>
            </div>
            <h1>{color}</h1>
        </div>
    )
}

 


export default RCG;