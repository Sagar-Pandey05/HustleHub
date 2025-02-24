const express = require("express");
const dotenv = require("dotenv");
const connect = require("./db/db");
const authRoutes = require("./routes/api/auth");
const userRoutes = require("./routes/api/users");
const projectRoutes = require("./routes/api/projects");

dotenv.config();
connect(); // Connect to MongoDB

app.use(express.urlencoded({ extended: true }));
const app = express();
app.use(express.json());

// API Routes
app.use("/api/auth", authRoutes);

app.use("/api/users", userRoutes); // user Routes

app.use("/api/projects", projectRoutes);   // project Routes

module.exports = app;
