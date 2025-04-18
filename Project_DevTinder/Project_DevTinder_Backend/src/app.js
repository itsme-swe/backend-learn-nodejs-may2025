/*
💥 Now we are creating server using express.js 
 */

const express = require("express");

const { adminAuth } = require("./middlewares/auth");

const connectDB = require("./config/database");

const User = require("./models/user");

const app = express();
const PORT = 3000;

//◽ Connecting our app to DB
connectDB()
  .then(() => {
    console.log("Database connection established...");
    app.listen(PORT, () => {
      console.log(`Server is listening at port ${PORT}.`);
    });
  })
  .catch((err) => {
    console.error("Database cannot be connected");
  });

//◽ Accessing query parametrs
// app.get("/dev", (req, res) => {
//   const query = req.query.username;
//   const pass = req.query.pass;

//   res.send(`Searching for: ${query} and ${pass}`);
// });

//◽ Route parameters
// app.get("/user/:userId/:password", (req, res) => {
//   const userId = req.params.userId;
//   const pass = req.params.password;

//   console.log(userId);
//   console.log(pass);

//   res.send(`UserId is ${userId} and password is ${pass}`);
// });

// app.post("/user", (req, res) => {
//   res.send("Data Successfully saved to DB.");
// });

// app.delete("/user", (req, res) => {
//   res.send("User deleted successfully");
// });

//◽ Using regex
// app.get(/\/ab?cd/, (req, res) => {
//   res.send("ab?cd");
// });

//◽ Multiple route handler
// app.get(
//   "/car",
//   (req, res, next) => {
//     console.log("Handling the route car_1.");
//     next();
//   },
//   (req, res) => {
//     console.log("Handling the car_2");
//     res.send("2nd Handler responding");
//   }
// );

//💥 Writing Middleware for all GET, POST, DELETE,.... requests
// app.use("/admin", adminAuth);

// app.get("/admin/getAllData", (req, res) => {
//   res.send("All Data sent");
// });

// app.delete("/admin/deleteUser", (req, res) => {
//   res.send("Deleted a user");
// });

app.post("/signup", async (req, res) => {
  // Creating new instance of the User model
  const user = new User({
    firstName: "Juhu",
    lastName: "Chellani",
    emailId: "juhi123@xyz",
    password: "abc123",
    age: 30,
    gender: "Female",
  });

  await user.save();
  res.send("User added successfully");
});
