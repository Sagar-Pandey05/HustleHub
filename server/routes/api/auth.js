const express = require("express");
const { registerUser, loginUser } = require("../../controllers/authController");
const router = express.Router();


router.post("/register", registerUser);
router.post("/login", loginUser);

console.log("Auth routes loaded"); // To check if the file is correctly imported


module.exports = router;


