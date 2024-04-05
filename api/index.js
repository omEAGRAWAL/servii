//create a server to do login
const express = require("express");
const path = require("path");
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

  const __dirname = path.resolve();

const schema = new mongoose.Schema({
  name: String,
  companyName: String,
  email: String,
  phoneNumber: Number,
  message: String,
});

const terms = new mongoose.Schema({
  title: String,
  content: String,
});

const Contact = mongoose.model("Contact", schema);
const Terms = mongoose.model("Terms", terms);

app.post("/api/contact", async (req, res) => {
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
  const data = req.body;
  console.log(data);
  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbwFJud8M9lD_8guYmQkdax8yDRYEk-Q54RjEwUnnxFZXH6w4y5Y5Uyj4IMshxJMjQE/exec",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" }, // Specify content type
        body: data, // Send data as JSON
      }
    );

    // Check if the response status is 200 (OK)
    if (response.status === 200) {
      console.log(response);
      console.log("Form data submitted successfully!");
      // Optionally, clear the form or display a success message
    } else {
      // If the response status is not 200, throw an error
      throw new Error("Failed to submit form");
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    // Handle errors (e.g., display an error message)
  }
});

app.post("/api/terms", async (req, res) => {
  try {
    const terms = new Terms({
      title: req.body.title,
      content: req.body.content,
    });
    terms.save().then((result) => {
      res.status(201).json({
        message: "Terms added successfully",
      });
    });
  } catch (error) {
    console.error("Error submitting form:", error);
    // Handle errors (e.g., display an error message)
  }
});

app.get("/api/terms", async (req, res) => {
  try {
    const terms = await Terms.find();
    res.status(200).json(terms);
  } catch (error) {
    console.error("Error submitting form:", error);
    // Handle errors (e.g., display an error message)
  }
});
// we need to update the terms using the _id
app.put("/api/terms/:id", async (req, res) => {
  try {
    const terms = await Terms.findById(req.params.id);
    terms.title = req.body.title;
    terms.content = req.body.content;
    terms.save().then((result) => {
      res.status(201).json({
        message: "Terms updated successfully",
      });
    });
  } catch (error) {
    console.error("Error submitting form:", error);
    // Handle errors (e.g., display an error message)
  }
});


app.use(express.static(path.join(__dirname, "/client/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/dist/index.html"));
});

