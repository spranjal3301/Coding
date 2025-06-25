//! Testing an express app
//`` Add dependencies
// npm install --save-dev ts-jest  @jest/globals 
// npm i supertest @types/supertest
// npm install express  @types/express

//``` Initialize jest.config.ts
// npx ts-jest config:init


//! supertest
//* A library to test HTTP servers

import express from "express";

export const app = express(); //- export the app for testing
app.use(express.json());

app.post("/sum", (req, res) => {
    const a = req.body.a;
    const b = req.body.b;
    const answer = a + b;

    res.json({
        answer
    })
});


//- app.listen is in "bin.ts" for running the server, not needed for testing
//- we do not want to start the server when running tests, so we export the app only
//- the server can be started in a separate file, like