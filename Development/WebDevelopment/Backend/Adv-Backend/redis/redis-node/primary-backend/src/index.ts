import express from "express";
import { createClient } from 'redis'

const app = express();

const client = createClient();
client.on('error', (err) => console.log('Redis Client Error', err));

app.use(express.json());

app.post("/submit", async (req,res) => {
    /*body
        {
        "problemId":1,
        "code":2,
        "language":"3"
        }
    */
    const problemId = req.body.problemId;
    const code = req.body.code;
    const language = req.body.language;


    try {
        await client.LPUSH("problems",JSON.stringify({problemId,code,language}))
        res.status(200).send("Submission received and stored.");
    } catch (error) {
        console.error("Redis error:", error);
        res.status(500).send("Failed to store submission.");
    }

});


async function startServer() {
    try {
        await client.connect();
        console.log("Connected to Redis");

        app.listen(3000, () => {
            console.log("Server is running on port 3000");
        });
    } catch (error) {
        console.error("Failed to connect to Redis", error);
    }
}

startServer();