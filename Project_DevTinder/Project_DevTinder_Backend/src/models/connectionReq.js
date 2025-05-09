// This connection request will define the connection b/w two users.

const mongoose = require("mongoose");

const connectionReqSchema = new mongoose.Schema(
  {
    fromUserId: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
    },
    toUserId: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
    },
    status: {
      type: String,
      require: true,
      enum: {
        values: ["ignore", "intrested", "accepted", "rejected"],
        message: `${VALUE} is incorrect status type`,
      },
    },
  },
  { timestamps: true }
);

const ConnectionReqModel = new mongoose.model(
  "ConnectionReqModel",
  connectionReqSchema
);

module.exports = ConnectionReqModel;
