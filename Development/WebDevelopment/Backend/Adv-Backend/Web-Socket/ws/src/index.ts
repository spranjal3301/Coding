import WebSocket, { WebSocketServer } from "ws";
import http from "http";

//- Creating a http server
const server = http.createServer();

//- Creating a WebSocketServer instance
const wss = new WebSocketServer({ server });

//- Event listener for connection
wss.on("connection", function connection(ws) {

  //- Event listener for error  
  ws.on("error", (error) => {
    console.log(new Date() + " Error: " + error);
  });

  //- Event listener for msg
  ws.on("message", function message(data, isBinary) { 
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
});
