//!Authentication vs Authorization
//*Authentication is the process of verifying a user's identity.
//?example: login with username and password,jwt token,otp
//*Authorization is the process of determining what resources a user can access
//?example: user can access the admin panel or not, user can access the file or not


//!Hashing & Encrypting
//* Encryption translates data from its original form to another form. 
//* Hashing maps any arbitrary size data into a fixed-length value(Some gibberish).
//~ Encryption is a two-way function(decrypt with Key), while hashing is a one-way function.

//!Json Web Tokens: JWT
//*It is digital signature, which is used to verify the sender of the message.
//* It is like Verification Token(strings) which allows securely transmit information between them as a JSON object.
//* JWT is an open standard that allows parties to securely transmit information between them as a JSON object.
//* JWT is a compact, URL-safe means of representing claims to be transferred between two parties.
//* Send in the header of HTTP request or in the body of HTTP request.

//~ JWT Stored at "localStorage or Cookies or SessionStorage" or in the URL for verification without Login or hiting DB again and again.
//~ Token in Requests: Each subsequent request from the user's browser includes the JWT in the Authorization header.

//*Some JWT Functions
//~token = jwt.sign(payload, secretOrPrivateKey, [options, callback])
//~ jwt.verify(token, secretOrPublicKey, [options, callback])
//~ jwt.decode(token)

//npm install jsonwebtoken

const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456"; //*Secret key for JWT only
app.use(express.json());

const ALL_USERS = [
  {
    username: "harkirat@gmail.com",
    password: "123",
    name: "harkirat singh",
  },
  {
    username: "raman@gmail.com",
    password: "123321",
    name: "Raman singh",
  },
  {
    username: "priya@gmail.com",
    password: "123321",
    name: "Priya kumari",
  },
];

function userExists(username, password) {
    return ALL_USERS.some((user) => user.username === username && user.password === password);
}

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }

  var token = jwt.sign({ username: username }, jwtPassword);
  return res.json({
    token,
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;

  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    const user= ALL_USERS.filter((user) => user.username != username);
    return res.json(user);


  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
  
});

app.listen(3000)