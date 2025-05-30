const jwt = require("jsonwebtoken");
const User = require("../models/user");

const userAuth = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token) {
      return res.status(401).send("Please Login!"); // 401 Means you are Unauthorized
    }

    const decodedObj = await jwt.verify(token, "Dev@MyApp#0506");

    const { _id } = decodedObj;

    const user = await User.findById(_id);
    if (!user) {
      throw new Error("User not found");
    }

    req.user = user;
    next();
  } catch (err) {
    res.status(404).send(`ERROR : ${err.message}`);
  }
};

module.exports = { userAuth };
