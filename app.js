const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//import routes
const kgidcandidateroute=require('./Routes/kgidcandidateroute');



// Database connection
mongoose.connect(process.env.MONGODB_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000, 
    socketTimeoutMS: 45000 
  }).then(() => {
    console.log("Connected to the server");
  }).catch((error) => {
    console.error("Error in connecting to the server:", error);
  });





  //use routes
  app.use('/app',kgidcandidateroute);




// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});