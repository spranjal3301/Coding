"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//- npm install socket.io
const socket_io_1 = require("socket.io");
const http_1 = require("http");
const server = (0, http_1.createServer)();
const io = new socket_io_1.Server(server);
io.on('connection', (socket) => {
    console.log('a user connected');
});
server.listen(8080, () => {
    console.log('server running at http://localhost:3000');
});
