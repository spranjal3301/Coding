import { useEffect, useState } from "react";


function TicTacToc(){
    const [squares, setSquares] = useState(Array(9).fill(null))
    const [isXNext, setIsXNext] = useState(true)
    const [winner, setWinner] = useState(null)
  

    function calculateWinner(squares){
        const lines=[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];
        for(let i=0; i<lines.length; i++){
            const [a,b,c]=lines[i];
            if(squares[a] && squares[a]===squares[b] && squares[a]===squares[c]){

                return squares[a];
            }
        }
        return null;
    }

    useEffect(()=>{
        setWinner(calculateWinner(squares));

    },[squares,isXNext])


    if(winner)
        return( 
            <div>
                <h1>Winner is {winner}</h1>
                <button onClick={()=>{
                    setSquares(Array(9).fill(null))
                    setIsXNext(true)
                    setWinner(null)
                    }}>Restart</button>
            </div>
        )
    

    
    return(
        <div className="grid grid-cols-3 gap-3">    
            {squares.map((value, index) =>{
                return <Square key={index} 
                value={value} index={index}  
                squares={squares} setSquares={setSquares} 
                isXNext={isXNext} setIsXNext={setIsXNext}       />
            
            }) }
        </div>
    )
}


function Square({value,index,squares,setSquares,isXNext,setIsXNext}){

    function handleClick(){
        if(squares[index]!==null) return;
        const cpySquare=[...squares];
        cpySquare[index]=isXNext?'X':'O'
        setIsXNext(!isXNext);
        setSquares(cpySquare); 
    
    }

    return(
        <button onClick={handleClick} className="w-20 h-20">
           {value}
        </button>
    )
}

export default TicTacToc;