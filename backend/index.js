//create a server to do login
const express = require("express");

const bodyParser = require("body-parser");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(bodyParser.json());
//host on port 3000
app.listen(3000, () => {
  console.log("Server started on port 3000");
});

mongoose
  .connect(
    "mongodb+srv://Omagr:Password@cluster0.mfa3wse.mongodb.net/servii?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log("Connection failed", err);
  });

const schema = new mongoose.Schema({
  name: String,
  companyName: String,
  email: String,
  phoneNumber: Number,
  message: String,
});

const Contact = mongoose.model("Contact", schema);

app.post("/api/contact", (req, res) => {
  const contact = new Contact({
    name: req.body.name,
    companyName: req.body.companyName,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    message: req.body.message,
  });
  contact.save().then((result) => {
    res.status(201).json({
      message: "Contact added successfully",
    });
  });
});
