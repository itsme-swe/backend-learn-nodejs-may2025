/*
💥 Now we are creating server using express.js 
 */

const express = require("express");

const app = express();

const PORT = 3000;

app.get("/dev", (req, res) => {
  res.send("I am SWE Harsh.");
});

app.get("/user", (req, res) => {
  res.send({ firstname: "Juhu", lastname: "Chellani", city: "Ajmer" });
});

app.post("/user", (req, res) => {
  res.send("Data Successfully saved to DB.");
});

app.delete("/user", (req, res) => {
  res.send("User deleted successfully");
});

app.listen(PORT, () => {
  console.log(`Server is listening at port ${PORT}.`);
});
