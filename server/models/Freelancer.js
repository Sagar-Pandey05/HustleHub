const mongoose = require("mongoose");
const User = require("./User");

const freelancerSchema = new mongoose.Schema({
  skills: [{ type: String, required: true }], // List of skills
  experience: { type: Number, required: true }, // Years of experience
  appliedProjects: [{ type: mongoose.Schema.Types.ObjectId, ref: "Application" }]
});

// Use Mongoose Discriminator to Extend User Schema
const Freelancer = User.discriminator("Freelancer", freelancerSchema);

module.exports = Freelancer;
