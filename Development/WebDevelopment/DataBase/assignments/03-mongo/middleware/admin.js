const { Admin } = require("../db");

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const adminData={
        username:req.headers.username,
        password:req.headers.password
    }
    // console.log(adminData);
    const user=await Admin.findOne(adminData)
    if(!user)
        res.status(404).json({ message: 'Admin dont Exist' });
    else
        next();

}

module.exports = adminMiddleware;