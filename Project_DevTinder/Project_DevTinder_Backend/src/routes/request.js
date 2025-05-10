const express = require("express");

const requestRouter = express.Router();

const { userAuth } = require("../middlewares/auth");
const ConnectionRequest = require("../models/connectionReq");

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

      // Check if a connection request already exists between the two users (in either direction).
      const existingConnectionReq = await ConnectionRequest.findOne({
        $or: [
          { fromUserId, toUserId },
          { fromUserId: toUserId, toUserId: fromUserId },
        ],
      });

      // If found, return an error response. If not found, `existingConnectionReq` will be null.
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

      res.json({
        message: "Connection request sent successfully",
        data,
      });
    } catch (error) {
      res.status(400).send("ERROR : " + error.message);
    }
  }
);

module.exports = requestRouter;
