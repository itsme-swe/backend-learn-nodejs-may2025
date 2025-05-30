//💥 Now we are creating server using express.js

const express = require("express");

const connectDB = require("./config/database");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const authRouter = require("./routes/auth");
const profileRouter = require("./routes/profile");
const requestRouter = require("./routes/request");
const userRouter = require("./routes/user");

const app = express();
const PORT = 3000;

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
//💥 Enables Express to handle JSON request bodies
app.use(express.json());

//💥 It's an middleware to read req.cookies
app.use(cookieParser());

app.use("/", authRouter);
app.use("/", profileRouter);
app.use("/", requestRouter);
app.use("/", userRouter);

//💥 Connecting our app to DB
connectDB()
  .then(() => {
    console.log("Database connection established...");
    app.listen(PORT, () => {
      console.log(`Server is listening at port ${PORT}.`);
    });
  })
  .catch((err) => {
    console.error(err.message);
  });

//💥 Accessing query parametrs
app.get("/dev", (req, res) => {
  const query = req.query.username;
  const pass = req.query.pass;

  res.send(`Searching for: ${query} and ${pass}`);
});

//💥 Route parameters
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

//💥 Using regex
app.get(/\/ab?cd/, (req, res) => {
  res.send("ab?cd");
});

//💥 Multiple route handler
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

app.get("/admin/getAllData", (req, res) => {
  res.send("All Data sent");
});

app.delete("/admin/deleteUser", (req, res) => {
  res.send("Deleted a user");
});

//💥 API will retrieve the user from DB on the basis of emailId
app.get("/user", async (req, res) => {
  const userEmail = req.body.emailId;

  try {
    const user = await User.find({ emailId: userEmail });

    if (user.length === 0) {
      res.status(404).send("User not found");
    } else {
      res.send(user);
    }
  } catch (err) {
    res.status(400).send("Something went wrong" + err.message);
  }
});

//💥 API will return all the users from DB
app.get("/feed", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (error) {
    res.status(400).send("Something went wrong");
  }
});

//💥 If duplicate documents present API will return the first document
app.get("/user/one", async (req, res) => {
  const userEmail = req.body.emailId;

  try {
    const user = await User.findOne({ emailId: userEmail });

    if (!user) {
      res.status(404).send("Single user not found");
    } else {
      res.send(user);
    }
  } catch (error) {
    res.status(404).send("User not found");
  }
});

//💥 Delete user by Id API
app.delete("/user", async (req, res) => {
  const userId = req.body.userId;

  try {
    const user = await User.findByIdAndDelete(userId);

    if (!user) {
      res.status(400).send("User not found");
    } else {
      res.send("User deleted successfully", user);
    }
  } catch (error) {
    res.status(400).send("Something went wrong");
  }
});
