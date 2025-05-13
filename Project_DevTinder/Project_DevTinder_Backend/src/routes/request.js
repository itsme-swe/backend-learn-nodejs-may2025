const express = require("express");

const requestRouter = express.Router();

const { userAuth } = require("../middlewares/auth");
const ConnectionRequest = require("../models/connectionReq");
const User = require("../models/user");

requestRouter.post(
  "/request/send/:status/:toUserId",
  userAuth,
  async (req, res) => {
    try {
      const fromUserId = req.user._id;
      const toUserId = req.params.toUserId;
      const status = req.params.status;

      // The API will only allow these two status
      const allowedStatus = ["ignored", "interested"];
      if (!allowedStatus.includes(status)) {
        return res
          .status(400)
          .json({ message: "Invalid status type: " + status });
      }

      // 1️⃣ Checking toUserId is present in DB
      const toUser = await User.findById(toUserId);
      if (!toUser) {
        return res.status(400).json({ message: "User not found!!" });
      }

      // 2️⃣ Check if a connection request already exists between the two users (in either direction).
      const existingConnectionReq = await ConnectionRequest.findOne({
        $or: [
          { fromUserId, toUserId },
          { fromUserId: toUserId, toUserId: fromUserId },
        ],
      });

      // 3️⃣ If found, return an error response. If not found, `existingConnectionReq` will be null.
      if (existingConnectionReq) {
        return res
          .status(400)
          .send({ message: "Connection request already exist!" });
      }

      const connectionReq = new ConnectionRequest({
        fromUserId,
        toUserId,
        status,
      });

      const data = await connectionReq.save();

      let message = " ";

      if (status === "interested") {
        message = `${req.user.firstName} is interested in ${toUser.firstName}`;
      } else if (status === "ignored") {
        message = `${req.user.firstName} is not interested in ${toUser.firstName}`;
      }

      res.json({
        message,
        data,
      });
    } catch (error) {
      res.status(400).send("ERROR : " + error.message);
    }
  }
);

module.exports = requestRouter;
