const jwt = require('jsonwebtoken');
const jwtKey = require('../index');

function userMiddleware(req, res, next) {
    const token = req.headers.authorization;
    const words = token.split(' '); // ['Bearer ', 'token']
    const actualToken = words[1];
    jwt.verify(actualToken, jwtKey, (err, decoded) => {
        if (err) {
            res.status(401).send("Unauthorized");
        } else {
            decoded.usename ? next() : res.status(401).send("Unauthorized");
        }
    });
}

module.exports = userMiddleware;