


// - NodeJS Vertical Scaling
//     * Very Hard to scale vertically due to its single-threaded nature
//     * Can use clustering to utilize multiple CPU cores
//     * No Parallel processing in a single instance

// - Implementing horizontal scaling in Node.js project
//     * We can start multiple node projects then? If there are 8 cores, then just start 8 projects?
//     ? Problem: How to share the same port?
//             ? Just ugly to do this, keep track of the processes that are up and down
//             ? Processes will have port conflicts, you’ll have to run each process on a saparate port

// - Cluter Module
//     * Node.js provides a built-in cluster module to create child processes that share the same server port
//     * Each child process can handle requests independently
//     * Allows for better utilization of multi-core systems
//     * This is a way to implement horizontal scaling in Node.js
//~ This is not true horizontal scaling, but rather a way to utilize multiple cores on a single machine
//~ This is different from multi threading, as each worker is a separate Node.js instance
//~ Slowly performance in comparison to multi-threading, but still useful for Node.js applications

import express from "express";
import cluster from "cluster";
import os from "os";

const totalCPUs = os.cpus().length;

const port = 3000;

if (cluster.isPrimary) { //- If the current process is the main/parent process
  console.log(`Number of CPUs is ${totalCPUs}`);
  console.log(`Primary ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < totalCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
    console.log("Let's fork another worker!");
    cluster.fork();
  });
} else {
  const app = express();
  console.log(`Worker ${process.pid} started`);

  app.get("/", (req, res) => {
    res.send("Hello World!");
  });

  app.get("/api/:n", function (req, res) {
    let n = parseInt(req.params.n);
    let count = 0;

    if (n > 5000000000) n = 5000000000;

    for (let i = 0; i <= n; i++) {
      count += i;
    }

    res.send(`Final count is ${count} ${process.pid}`);
  });

  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });
}



//! Cluter module vs Worker Threads