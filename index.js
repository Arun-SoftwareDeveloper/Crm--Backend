const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const Routes = require("./Routes/UserRoutes");
const adduserRoutes = require("./Routes/AddUserRoutes");

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://rococo-pixie-ec3d7e.netlify.app/",
    ],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);
// Middleware
app.use(bodyParser.json());
const dbUrl =
  "mongodb+srv://arunramasamy46:arunramasamy46@cluster0.o2mu7nq.mongodb.net/?retryWrites=true&w=majoritygi";
// Database Setup
mongoose
  .connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    // Start your server or perform any other operations here
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
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
