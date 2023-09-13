const express = require("express");
const authController = require("../Controllers/UserController");

const router = express.Router();

// Authentication routes
router.post("/register", authController.registerUser);
router.post("/login", authController.loginUser);
router.post("/forgotpassword", authController.forgotPassword);
router.post("/resetpassword", authController.resetPassword);

module.exports = router;
