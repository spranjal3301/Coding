const { User } = require("../db");



async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const userData={
        username:req.headers.username,
        password:req.headers.password
    }
    const user=await User.findOne(userData);
  
    if(!user)
        res.status(404).json({ message: 'user dont Exist' });
    else
        next();
}

module.exports = userMiddleware;