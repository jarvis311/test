const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

// const env = process.env.NODE_ENV || 'development';
const app = express();
const PORT = 8000;

app.get("/", (req, res) => {
  res.status(200);
  res.send("Welcome to root URL of Server");
});

mongoose
  .connect("mongodb://localhost:27017/nodejs-mongo")
  .then(() => {
    console.log("Mongodb Connect!!");
  })
  .catch(() => {});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/api", require("./routes/index"));

app.listen(PORT, (error) => {
  if (!error)
    console.log(
      "Server is Successfully Running,and App is listening on port " + PORT
    );
  else console.log("Error occurred, server can't start", error);
});
