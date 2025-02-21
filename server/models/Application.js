const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
  freelancer: { type: mongoose.Schema.Types.ObjectId, ref: "Freelancer", required: true },
  project: { type: mongoose.Schema.Types.ObjectId, ref: "Project", required: true },
  coverLetter: { type: String, required: true },
  status: { type: String, enum: ["pending", "accepted", "rejected"], default: "pending" },
  createdAt: { type: Date, default: Date.now }
});

const Application = mongoose.model("Application", applicationSchema);
module.exports = Application;
