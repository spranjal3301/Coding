import express from "express";
import { z } from "zod";
import { prismaClient } from "./db";

export const app = express();
app.use(express.json());

const sumInput = z.object({
    a: z.number(),
    b: z.number()
})


app.post("/spy",async (req:any, res:any) => {
    const parsedResponse = sumInput.safeParse(req.body)
    
    if (!parsedResponse.success) {
        return res.status(411).json({
            message: "Incorrect inputs"
        })
    }

    const answer = parsedResponse.data.a + parsedResponse.data.b;

    //- spying the database call for testing purposes
    //- This is just to ensure that the db call is made with correct inputs
    //- In real world, you would not do this, as the db call is already
    const rep = await prismaClient.sum.create({
        data: {
            a: parsedResponse.data.a,
            b: parsedResponse.data.b,
            result: answer
        }
    })
    //! Uncomment the below code to see how the spy works
    // await prismaClient.sum.create({
    //     data: {
    //         a: parsedResponse.data.a,
    //         b: parsedResponse.data.a,
    //         result: answer
    //     }
    // })

    res.json({
        answer,
        id:rep.id
    })
});

app.post("/mokeReturnValue",async (req:any, res:any) => {
    const parsedResponse = sumInput.safeParse(req.body)
    
    if (!parsedResponse.success) {
        return res.status(411).json({
            message: "Incorrect inputs"
        })
    }

    const answer = parsedResponse.data.a + parsedResponse.data.b;

    //- Mocking the database call for testing purposes
    const rep = await prismaClient.sum.create({
        data: {
            a: parsedResponse.data.a,
            b: parsedResponse.data.b,
            result: answer
        }
    })

    res.json({
        answer,
        id:rep.id
    })
});

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