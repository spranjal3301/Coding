const jwt = require('jsonwebtoken');
// const jwtKey = require('../index'); //! This is wrong circular dependency
const jwtKey =require('../config').jwtKey;
// Middleware for handling auth

function adminMiddleware(req, res, next) {
    const token = req.headers.authorization;
    const words = token.split(' '); // ['Bearer ', 'token']
    const actualToken = words[1];
    console.log(jwtKey);
    jwt.verify(actualToken, jwtKey, (err, decoded) => {
        if (err) {
            
            res.status(401).send("Unauthorized");
        } else {
            console.log(decoded);
            next();
        }
    });
}
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InBAZ21haWwuY29tIiwiaWF0IjoxNzEwMjY0MjQ4fQ.QNPS4WPDR0gGSjBXJaO5w09A9XvtmhnYyI7MWZDJPFg

module.exports = adminMiddleware;