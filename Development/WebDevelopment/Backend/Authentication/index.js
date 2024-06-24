//* We must not save users’ passwords in the database’s plain text in any application as it poses a severe security threat.
//* We should always save a password in the hashed format.
/* root index.js */

var express = require('express');
var mongoose = require('mongoose')
var cors = require('cors')

// Sample mongodb URI
const PORT = 3000;
const DB_URI = 'mongodb://127.0.0.1:27017/dbname';

// Create Database Connection
mongoose.connect(DB_URI);

var usersRouter = require('./controllers/users')

var app = express();
app.use(express.json());
app.use(cors())

app.use('/users/',usersRouter)

app.listen(PORT, function (err) {
  if (err) console.log(err);
  console.log("Server listening on PORT", PORT);
});