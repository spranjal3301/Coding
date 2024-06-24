/* models/User.js */
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

// UserSchema
const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password_hash: {
    type: String,
    required: true,
  },
});


// Method to generate a hash from plain text
UserSchema.methods.createHash = async function (plainTextPassword) {
    //-Salt: a piece of random data added to a password before it is hashed and stored. 

  // Hashing user's salt and password with 10 iterations,
  const saltRounds = 10;

  //! First method to generate a salt and then create hash
  const salt = await bcrypt.genSalt(saltRounds);
  return await bcrypt.hash(plainTextPassword, salt);

  //! Second mehtod - Or we can create salt and hash in a single method also
  //? return await bcrypt.hash(plainTextPassword, saltRounds);
};

// Validating the candidate password with stored hash and hash function
UserSchema.methods.validatePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password_hash);
};


module.exports.User = mongoose.model("User", UserSchema);