const User = require("../models/User");
const bcrypt = require("bcryptjs");

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
    const { name, email, password, role } = req.body;
    console.log("User fetched from DB:")

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update user fields (only if provided)
    if (name) user.name = name;
    if (email) user.email = email;
    if (password) {
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
    }
    if (role) user.role = role;

    await user.save();

    res.status(200).json({
      message: "Profile updated successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        createdAt: user.createdAt,
      },
    });
  } catch (error) {
    console.error("Error updating profile:", error);
    res.status(500).json({ message: "Server Error" });
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

//==================================Implement it later==============================================

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

//==================================================================================================


module.exports = {
    getUserProfile,
    updateUserProfile,
    deleteUser,
    getAllUsers,
};
