/* controllers/users.js */

var express = require("express");
var router = express.Router();
//- Express-async-handler simplifies error handling for asynchronous operations in Express. js,
//- making your code cleaner and more readable by eliminating the need for repetitive try/catch
//-  blocks in each async route handler.
var asyncHandler = require("express-async-handler");


const User = require("../models/User").User;

router.post("/signup",asyncHandler(async (req, res) => {

    // Initialize newUser object with request data
    const newUser = new User({
      name: req.body.name,
      email: req.body.email
    });

    var hashedPassword = await newUser.createHash(req.body.password);
    newUser.password_hash = hashedPassword;

    // Save newUser object to database
    await newUser.save();

    return res.status(201).json({
      message: "User created successfully.",
    });
  })
);

router.post("/signin",asyncHandler(async (req, res) => {
    // Find user with requested email
    let user = await User.findOne({ email: req.body.email });

    if (user === null) {
      return res.status(400).json({
        message: "User not found.",
      });
    } 
    else {
      if (await user.validatePassword(req.body.password)) {
        return res.status(200).json({
          message: "User Successfully Logged In",
        });
      } else {
        return res.status(400).json({
          message: "Incorrect Password",
        });
      }
    }
  })
);

module.exports = router;