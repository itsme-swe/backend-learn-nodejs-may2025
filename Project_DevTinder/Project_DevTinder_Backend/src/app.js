/*
💥 Now we are creating server using express.js 
 */

const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Welcome to my world");
});

app.get("/dev", (req, res) => {
  res.send("I am SWE Harsh.");
});

app.listen(PORT, () => {
  console.log(`Server is listening at port ${PORT}.`);
});
