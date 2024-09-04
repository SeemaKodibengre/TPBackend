const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();


const app = express();
const PORT = process.env.PORT;

// Database connection
mongoose.connect("mongodb://localhost:27017/TestPortal", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000, 
    socketTimeoutMS: 45000 
  }).then(() => {
    console.log("Connected to the server");
  }).catch((error) => {
    console.error("Error in connecting to the server:", error);
  });

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});