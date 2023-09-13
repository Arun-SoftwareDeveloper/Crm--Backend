const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  userType: {
    type: String,
    enum: ["Admin", "Manager", "Employee"],
    required: true,
  },
  passwordResetToken: String, // Add this field for password reset token
});

const User = mongoose.model("User", userSchema);

module.exports = User;
