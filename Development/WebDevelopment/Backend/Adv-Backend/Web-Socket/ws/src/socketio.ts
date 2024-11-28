//- npm install socket.io
import { Server } from 'socket.io';
import { createServer } from 'http';
import express from 'express';

const app = express();

const server = createServer(app);

const io = new Server(server);

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
      io.emit('chat message', msg);
    });
    console.log("hello");
});

server.listen(3000, () => {
    console.log('server running at http://localhost:3000');
});
