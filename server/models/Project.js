const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  budget: { type: Number, required: true },
  employer: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  applicants: [{ type: mongoose.Schema.Types.ObjectId, ref: "Application" }],
  status: { type: String, enum: ["open", "in-progress", "completed"], default: "open" },
  createdAt: { type: Date, default: Date.now }
});

const Project = mongoose.model("Project", projectSchema);
module.exports = Project;
