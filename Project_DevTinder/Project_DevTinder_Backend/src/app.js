/*
💥 Now we are creating server using express.js 
 */

const express = require("express");

const app = express();

const PORT = 3000;

//◽ Accessing query parametrs
app.get("/dev", (req, res) => {
  const query = req.query.username;
  const pass = req.query.pass;

  res.send(`Searching for: ${query} and ${pass}`);
});

//◽ Route parameters
app.get("/user/:userId/:password", (req, res) => {
  const userId = req.params.userId;
  const pass = req.params.password;

  console.log(userId);
  console.log(pass);

  res.send(`UserId is ${userId} and password is ${pass}`);
});

app.post("/user", (req, res) => {
  res.send("Data Successfully saved to DB.");
});

app.delete("/user", (req, res) => {
  res.send("User deleted successfully");
});

//◽ Using regex
app.get(/\/ab?cd/, (req, res) => {
  res.send("ab?cd");
});

//◽ Multiple route handler
app.get(
  "/car",
  (req, res, next) => {
    console.log("Handling the route car_1.");
    next();
  },
  (req, res) => {
    console.log("Handling the car_2");
    res.send("2nd Handler responding");
  }
);

app.listen(PORT, () => {
  console.log(`Server is listening at port ${PORT}.`);
});
