const mongoose = require("mongoose");

const validator = require("validator");

const userSchema = new mongoose.Schema(
  {
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
      index: true,
      lowercase: true,
      trim: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Invalid email address");
        }
      },
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
      },
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
      validate(val) {
        if (val.length > 5) {
          throw new Error("Skills cannot more than 5...");
        }
      },
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
