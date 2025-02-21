const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
  sender: { type: mongoose.Schema.Types.ObjectId, refPath: "senderType", required: true },
  senderType: { type: String, enum: ["Freelancer", "Employer"], required: true },
  receiver: { type: mongoose.Schema.Types.ObjectId, refPath: "receiverType", required: true },
  receiverType: { type: String, enum: ["Freelancer", "Employer"], required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Chat = mongoose.model("Chat", chatSchema);
module.exports = Chat;
