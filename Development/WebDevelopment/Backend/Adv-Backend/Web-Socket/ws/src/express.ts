//! WS Server with Express
import express from 'express';
import WebSocket, { WebSocketServer } from "ws";
import { createServer } from 'node:http';

//- Creating a http express server
const app=express();

//`M01
const server = createServer(app);

//`M02 : Wihtout http import
// const server = app.listen(8080,()=>{
//     console.log(" Server is listening on port 8080");
// })

//- Creating a WebSocketServer instance
const wss = new WebSocketServer({ server: server });

//- Event listener for connection
wss.on("connection", function connection(ws) {

    //- Event listener for error  
    ws.on("error", (error) => {
      console.log(error);
    });
  
    //- Event listener for msg
    ws.on("message", function message(data, isBinary) { 
       //-Request-Hanlding Logic
      // Broadcasting message to all clients except the sender
      for(let client of wss.clients){
          if(client !== ws && client.readyState === WebSocket.OPEN){
              client.send(data, { binary: isBinary });
          }
      }
    });
  
    //- Sending message to client on connection
    ws.send("Hello! Message From Server!!");
});


server.listen(8080,()=>{
    console.log(" Server is listening on port 8080");
})