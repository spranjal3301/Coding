//! Dummy JSON-RPC Server Example 

const express = require('express');
const bodyParser = require('body-parser');

/*
```Example Request:
POST /jsonrpc HTTP/1.1
Host: example.com
Content-Type: application/json
{
  "jsonrpc": "2.0",
  "method": "getTodos", // The function you want to call
  "params": [],
  "id": 1
}
*/

const app = express();
const port = 3000;

// Parse JSON bodies
app.use(bodyParser.json());

// Define a sample method
function add(a, b) {
    return a + b;
}

// Handle JSON-RPC requests
app.post('/rpc', (req, res) => {
    const { jsonrpc, method, params, id } = req.body;

    if (jsonrpc !== '2.0' || !method || !Array.isArray(params)) {
        res.status(400).json({ jsonrpc: '2.0', error: { code: -32600, message: 'Invalid Request' }, id });
        return;
    }

    // Execute the method
    let result;
    switch (method) {
        case 'add':
            result = add(params[0], params[1]);
            break;
        default:
            res.status(404).json({ jsonrpc: '2.0', error: { code: -32601, message: 'Method not found' }, id });
            return;
    }

    // Send back the response
    res.json({ jsonrpc: '2.0', result, id });
});

// Start the server
app.listen(port, () => {
    console.log(`JSON-RPC server listening at http://localhost:${port}`);
});
