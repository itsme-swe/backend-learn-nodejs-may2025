const mongoose = require("mongoose");

//◽ Always use async await bcoz it return us promise
const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://meharsh05:dollarkamao@harsh.rxfdaal.mongodb.net/?retryWrites=true&w=majority&appName=Harsh"
  );
};

connectDB()
  .then(() => {
    console.log("Database connection established");
  })
  .catch((err) => {
    console.error("Database cannot be connected");
  });
