//! Moving from jest to vitest (https://vitest.dev/)
 //* Vitest is the mildly recent entrant in the testing framework market.
//- It has a bunch of benefits over jest, specially has great support for TS.
//* So we’ll be moving to vitest for all future tests
//* It is highly compatable with jest

// Link to why vitest - https://vitest.dev/guide/why.html

//- vistest is higly compatible with jest, so we can use most of the jest code as it is
//- It has a lot of features like snapshot testing, mocking, and code coverage built-in
//- It is designed to be fast and efficient, making it suitable for large projects
//- It has a great community and ecosystem, with many plugins and integrations available 

// npm i -D vitest

//` When writing unit tests , you mock out all external service calls. 
//- This means you test the core of your logic, and assume the database calls would succeed. 
//- This is done so tests can run without starting a database / external services


//` Mocking :
//- Problem : What if I want to use the value that the database call returns?
// vi.mock('../db', () => ({
//   prismaClient: { sum: { create: vi.fn() }}
// }));

//`Deep mocking:
// npm i -D vitest-mock-extended 
//~ Create a __mocks__ directory in the same directory as the module you want to mock.
// ```__mocks__/FileName 
// export const prismaClient = mockDeep<PrismaClient>()

// vi.mock('../db');

import express from "express";
import { z } from "zod";
import { prismaClient } from "./db";

export const app = express();
app.use(express.json());

const sumInput = z.object({
    a: z.number(),
    b: z.number()
})



app.post("/mock",async (req:any, res:any) => {
    const parsedResponse = sumInput.safeParse(req.body)
    
    if (!parsedResponse.success) {
        return res.status(411).json({
            message: "Incorrect inputs"
        })
    }

    const answer = parsedResponse.data.a + parsedResponse.data.b;

    //- Mocking the database call for testing purposes
    await prismaClient.sum.create({
        data: {
            a: parsedResponse.data.a,
            b: parsedResponse.data.b,
            result: answer
        }
    })

    res.json({
        answer
    })
});



app.post("/sum", (req:any, res:any) => {
    const parsedResponse = sumInput.safeParse(req.body)
    
    if (!parsedResponse.success) {
        return res.status(411).json({
            message: "Incorrect inputs"
        })
    }

    const answer = parsedResponse.data.a + parsedResponse.data.b;

    res.json({
        answer
    })
});

app.get("/sum", (req:any, res:any) => {
    const parsedResponse = sumInput.safeParse({
        a: Number(req.headers["a"]),
        b: Number(req.headers["b"])
    })
    
    if (!parsedResponse.success) {
        return res.status(411).json({
            message: "Incorrect inputs"
        })
    }

    const answer = parsedResponse.data.a + parsedResponse.data.b;

    res.json({
        answer
    })
});