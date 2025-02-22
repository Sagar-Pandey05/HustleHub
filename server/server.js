const express = require("express");
const dotenv = require("dotenv");
const connect = require("./db/db");
const authRoutes = require("./routes/api/auth");
const userRoutes = require("./routes/api/users");

dotenv.config();
connect(); // Connect to MongoDB

const app = express();
app.use(express.json());

// API Routes
app.use("/api/auth", authRoutes);

app.use("/api/users", userRoutes); // Use user routes

module.exports = app;
