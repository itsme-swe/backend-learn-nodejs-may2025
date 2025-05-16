const express = require("express");

const authRouter = express.Router();

const { validateSignUpData } = require("../utils/validation");
const User = require("../models/user");
const bcrypt = require("bcrypt");
const validator = require("validator");

//💥 Regestering new user
authRouter.post("/signup", async (req, res) => {
  try {
    validateSignUpData(req);

    const { firstName, lastName, emailId, password, age, gender } = req.body;

    const passwordHash = await bcrypt.hash(password, 10);

    // Creating new instance of the User model
    const user = new User({
      firstName,
      lastName,
      emailId,
      password: passwordHash,
      age,
      gender,
    });

    await user.save();
    res.send("User added successfully");
  } catch (err) {
    res.status(400).send("ERROR : " + err.message);
  }
});

//💥 User try to login but only allowing if emailId & password is valid
authRouter.post("/login", async (req, res) => {
  try {
    const { emailId, password } = req.body;

    if (!validator.isEmail(emailId)) {
      throw new Error("Email not valid");
    }

    const user = await User.findOne({ emailId: emailId });
    if (!user) {
      throw new Error("Invalid credentials");
    }

    //🔸Schema Method
    const isPasswordValid = await user.validatePassword(password);

    if (isPasswordValid) {
      //🔸Schema Method
      const token = await user.getJWT();

      res.cookie("token", token, {
        expires: new Date(Date.now() + 8 * 3600000),
      });
      res.send("Login Successfully");
    } else {
      throw new Error("Invalid credentials");
    }
  } catch (err) {
    res.status(400).send("ERROR : " + err.message);
  }
});

authRouter.post("/logout", async (req, res) => {
  res
    .cookie("token", null, { expires: new Date(Date.now()) })
    .send("Logout Successfully");
});

module.exports = authRouter;
