const express = require("express");
const userRouter = express.Router();

const { userAuth } = require("../middlewares/auth");
const ConnectionRequest = require("../models/connectionReq");
const User = require("../models/user");

const USER_SAFE_DATA = "firstName lastName age gender";

//💥 Get all the pending connection req for the logged in user
userRouter.get("/user/request/received", userAuth, async (req, res) => {
  try {
    const loggedInUser = req.user;

    //1️⃣ DB call
    const connectionRequest = await ConnectionRequest.find({
      toUserId: loggedInUser._id,
      status: "interested",
    }).populate("fromUserId", USER_SAFE_DATA);

    res.json({ message: "Data fetched successfully", data: connectionRequest });
  } catch (err) {
    res.status(400).send(`ERROR : ${err.message}`);
  }
});

userRouter.get("/user/connections/matches", userAuth, async (req, res) => {
  try {
    const loggedInUser = req.user;

    const connectionRequest = await ConnectionRequest.find({
      $or: [
        {
          toUserId: loggedInUser._id,
          status: "accepted",
        },
        { fromUserId: loggedInUser._id, status: "accepted" },
      ],
    })
      .populate("fromUserId", USER_SAFE_DATA)
      .populate("toUserId", USER_SAFE_DATA);

    const data = connectionRequest.map((row) => {
      if (row.fromUserId._id.toString() === loggedInUser._id.toString()) {
        return row.toUserId;
      }
      return row.fromUserId;
    });

    res.json({ data });
  } catch (err) {
    res.status(400).send(`ERROR : ${err.message}`);
  }
});

userRouter.get("/feed", userAuth, async (req, res) => {
  try {
    /*💥 User should see all the users except:
    1️⃣ his own card
    2️⃣ his own connections
    3️⃣ ignored by users cards
    4️⃣ connection req. already sent
    */

    const loggedInUser = req.user;

    //💥 Find all connection request either (sent + received )
    const connectionRequest = await ConnectionRequest.find({
      $or: [
        {
          fromUserId: loggedInUser._id,
        },
        {
          toUserId: loggedInUser._id,
        },
      ],
    }).select("fromUserId toUserId");

    //💥 Set Data Structure only stores unique values inside it.
    const hideUsersFromFeed = new Set();

    //💥 Now iterating over all connection request and storing inside the set.
    connectionRequest.forEach((req) => {
      hideUsersFromFeed.add(req.fromUserId.toString());
      hideUsersFromFeed.add(req.toUserId).toString();
    });

    console.log(hideUsersFromFeed);

    //💥 Now finding all the users who's id is not present inside hideUsersFromFeed array and there id's are not equal to loggedInUser id.
    const users = await User.find({
      $and: [
        { _id: { $nin: Array.from(hideUsersFromFeed) } },
        { _id: { $ne: loggedInUser._id } },
      ],
    });

    res.json(connectionRequest);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
module.exports = userRouter;
