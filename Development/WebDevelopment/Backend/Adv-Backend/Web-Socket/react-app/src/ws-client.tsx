import { useEffect, useState } from "react";

//- Next.js
//* "use client"
//*  page.tsx

export default function Wsclient() {
  
  const [socket,setSocket] = useState<WebSocket | null>(null);
  const [messages,setMessage] = useState([]); 
  const [value,setValue] = useState("");

  useEffect(()=>{    
    const ws = new WebSocket('ws://localhost:8080');
    ws.onopen = () => {
        console.log("Connected");
        setSocket(ws);
    }

    ws.onmessage = (msg) => {
        console.log('Received msg:',msg.data);
        setMessage((omsg)=>[...omsg,msg.data]);
    }
    
    return () => ws.close()
  },[]);

  if(!socket)return <>Loading...</>


  return (
    <>
      <input onChange={(e)=>setValue(e.target.value)} type="text" /> <br />
      <button onClick={()=>socket.send(value)}>send msg</button>
      {
        messages.length==0?("No msg"):(
            messages.map((msg) => <p>{msg}</p>)
        )
      }  
    </>
  )
}
