//Require dotenv
require("dotenv").config({ path: "./config/.env" });

//Require connectdb
const connectDB = require("./config/connectDB");

//Require express
const express = require("express");

//Get instance from express
const app = express();

// MiddleWare bodyParser
app.use(express.json());

//require function connectDB
connectDB();
app.use("/", require("./Routes/user"));
app.use("*", (req, res) => {
  res.send("404 - PAGE NOT FOUND");
});

//listen to the port
const PORT = process.env.PORT;
app.listen(PORT, (err) => {
  err
    ? console.log("err=", err)
    : console.log(`Server running on port ${PORT}`);
});