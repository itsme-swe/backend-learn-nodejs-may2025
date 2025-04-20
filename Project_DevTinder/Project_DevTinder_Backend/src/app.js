/*
💥 Now we are creating server using express.js 
 */

const express = require("express");

const { adminAuth } = require("./middlewares/auth");

const connectDB = require("./config/database");

const Users = require("./models/user");

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

//💥 Writing Middleware for all GET, POST, DELETE,.... requests
app.use("/admin", adminAuth);

app.get("/admin/getAllData", (req, res) => {
  res.send("All Data sent");
});

app.delete("/admin/deleteUser", (req, res) => {
  res.send("Deleted a user");
});

// ▶ Enables Express to handle JSON request bodies
app.use(express.json());

app.post("/signup", async (req, res) => {
  // Creating new instance of the User model
  const user = new Users(req.body);

  try {
    await user.save();
    res.send("User added successfully");
  } catch (err) {
    res.status(400).send("Error saving the user:" + err.message);
  }
});

app.get("/user", async (req, res) => {
  const userEmail = req.body.emailId;

  try {
    const user = await Users.find({ emailId: userEmail });

    if (user.length === 0) {
      res.status(404).send("User not found");
    } else {
      res.send(user);
    }
  } catch (err) {
    res.status(400).send("Something went wrong" + err.message);
  }
});

app.get("/feed", async (req, res) => {
  try {
    const users = await Users.find({});
    res.send(users);
  } catch (error) {
    res.status(400).send("Something went wrong");
  }
});

app.get("/user/one", async (req, res) => {
  const userEmail = req.body.emailId;

  try {
    const user = await Users.findOne({ emailId: userEmail });

    if (!user) {
      res.status(404).send("Single user not found");
    } else {
      res.send(user);
    }
  } catch (error) {
    res.status(404).send("User not found");
  }
});
