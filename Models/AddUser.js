// models/User.js
const mongoose = require("mongoose");

const AdduserSchema = new mongoose.Schema({
  email: String,
  username: String,
  password: String,
  role: String,
});

module.exports = mongoose.model("AddUser", AdduserSchema);
