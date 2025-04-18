const mongoose = require("mongoose");

//◽ Always use async await bcoz it return us promise
const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://meharsh05:dollarkamao@harsh.rxfdaal.mongodb.net/devTinder?retryWrites=true&w=majority&appName=Harsh"
  );
};

module.exports = connectDB;
