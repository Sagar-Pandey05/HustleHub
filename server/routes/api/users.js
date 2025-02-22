const express = require("express");
const { getUserProfile, updateUserProfile, deleteUser, getAllUsers } = require("../../controllers/userController");
const authMiddleware = require("../../middleware/authMiddleware");

const router = express.Router();

// Protected routes (User must be logged in)
router.get("/profile", authMiddleware, getUserProfile);
router.put("/profile", authMiddleware, updateUserProfile);
router.delete("/profile", authMiddleware, deleteUser);

// Admin-only route
router.get("/", authMiddleware, getAllUsers);

module.exports = router;
