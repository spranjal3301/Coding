import express from "express";
import {PORT} from "@repo/common/config";

const app = express();
const port = 3003;

app.get("/", (req, res) => {
  res.send("Hello World!"+PORT);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
 


