const User = require("../models/User");

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
const getUserProfile = (req, res) => {
    try {
        res.json({
            message: "User Profile",
            user: req.user, // Comes from authMiddleware
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
const updateUserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.userId);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Update fields
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        user.bio = req.body.bio || user.bio;

        const updatedUser = await user.save();

        res.json({
            message: "Profile updated successfully",
            user: updatedUser,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Delete user account
// @route   DELETE /api/users/profile
// @access  Private
const deleteUser = async (req, res) => {
    try {
        const user = await User.findById(req.user.userId);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        await User.findByIdAndDelete(req.user.userId);

        res.json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get all users (Admin only)
// @route   GET /api/users
// @access  Private (Admin)
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({}, "-password"); // Exclude passwords
        res.json({ users });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getUserProfile,
    updateUserProfile,
    deleteUser,
    getAllUsers,
};
