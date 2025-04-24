const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
  },
  emailId: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
  gender: {
    type: String,
    validate(val) {
      if (!["male", "female", "others"].includes(val)) {
        throw new Error("Gender data is not valid...");
      }
    }
  },
  photoUrl: {
    type: String,
  },
  bio: {
    type: String,
    default: "Please add short bio about yourself!",
  },
  skills: {
    type: [String],
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
