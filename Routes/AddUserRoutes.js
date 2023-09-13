// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const AdduserController = require("../Controllers/AddUserController");

// Define user registration route
router.post("/adduser", AdduserController.registerUser);

module.exports = router;
