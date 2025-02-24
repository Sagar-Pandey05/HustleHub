const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const connect = require("./db/db");
const cors = require("cors");

const authRoutes = require("./routes/api/auth");
const userRoutes = require("./routes/api/users");
const projectRoutes = require("./routes/api/projects");


const app = express();
const port = process.env.PORT || 5000;

// Connect to the database
connect();

// Middleware for enabling CORS
app.use(cors());

// Middleware for parsing request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// API Routes

app.get('/', (req,res) => {
  res.send('API Running');
});

app.use("/api/auth", authRoutes);      // Authentication routes
app.use("/api/users", userRoutes);      // User-related routes
app.use("/api/projects", projectRoutes); // Project-related routes

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;
