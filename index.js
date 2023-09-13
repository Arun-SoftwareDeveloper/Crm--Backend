const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const Routes = require("./Routes/UserRoutes");
const adduserRoutes = require("./Routes/AddUserRoutes");

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Database Setup
mongoose
  .connect("mongodb://0.0.0.0:27017/CRM", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    // Start your server or perform any other operations here
  });

// Routes
app.use("/", Routes);
app.use("/", adduserRoutes);

// Start the server
const port = process.env.PORT || 4000;
app.get("/", (req, res) => {
  res.send("Hello!!! We Developed a back-end server for the CRM");
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
