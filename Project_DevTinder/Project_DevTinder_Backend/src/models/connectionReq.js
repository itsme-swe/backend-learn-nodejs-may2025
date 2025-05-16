// This connection request will define the connection b/w two users.

const mongoose = require("mongoose");

const connectionReqSchema = new mongoose.Schema(
  {
    fromUserId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // reference to the User collection
      required: true,
    },
    toUserId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    status: {
      type: String,
      required: true,
      enum: {
        values: ["ignored", "interested", "accepted", "rejected"],
        message: `{VALUE} is incorrect status type`,
      },
    },
  },
  { timestamps: true }
);

// Creating Compound Index
connectionReqSchema.index({ fromUserId: 1, toUserId: 1 });

connectionReqSchema.pre("save", function (next) {
  const ConnectionRequest = this;

  // Here we are checking if the fromUserId is same as toUserId
  if (ConnectionRequest.fromUserId.equals(ConnectionRequest.toUserId)) {
    throw new Error("Cannot send connection request!!!");
  }
  next();
});

const ConnectionReq = new mongoose.model("ConnectionReq", connectionReqSchema);

module.exports = ConnectionReq;
