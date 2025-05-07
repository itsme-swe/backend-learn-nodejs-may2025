const express = require("express");

const profileRouter = express.Router();

const { userAuth } = require("../middlewares/auth");
const { validateEditProfileData } = require("../utils/validation");
const User = require("../models/user");

//💥 Reading cookies and validating tokens
profileRouter.get("/profile/view", userAuth, async (req, res) => {
  try {
    const user = req.user;

    res.send(user);
  } catch (error) {
    res.status(400).send("ERROR : " + error.message);
  }
});

profileRouter.patch("/profile/edit", userAuth, async (req, res) => {
  try {
    const updateData = validateEditProfileData(req);

    if (!updateData) {
      throw new Error("Invalid edit request");
    }

    const loggedInUser = await User.findByIdAndUpdate(
      req.user._id,
      updateData,
      { returnDocument: "after", runValidators: true }
    );

    console.log(loggedInUser);

    res.send(`${loggedInUser.firstName}, your profile updated successfully.`);
  } catch (err) {
    res.status(401).send(`ERROR : ${err.message}`);
  }
});

module.exports = profileRouter;
