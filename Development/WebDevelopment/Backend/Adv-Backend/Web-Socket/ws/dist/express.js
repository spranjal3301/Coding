"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//! WS Server with Express
const express_1 = __importDefault(require("express"));
const ws_1 = __importStar(require("ws"));
const node_http_1 = require("node:http");
//- Creating a http express server
const app = (0, express_1.default)();
//`M01
const server = (0, node_http_1.createServer)(app);
//`M02 : Wihtout http import
// const server = app.listen(8080,()=>{
//     console.log(" Server is listening on port 8080");
// })
//- Creating a WebSocketServer instance
const wss = new ws_1.WebSocketServer({ server: server });
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
        for (let client of wss.clients) {
            if (client !== ws && client.readyState === ws_1.default.OPEN) {
                client.send(data, { binary: isBinary });
            }
        }
    });
    //- Sending message to client on connection
    ws.send("Hello! Message From Server!!");
});
server.listen(8080, () => {
    console.log(" Server is listening on port 8080");
});
