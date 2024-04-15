//create a server to do login

const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(bodyParser.json());

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "agrawalom755@gmail.com", // Your email address
    pass: "lrhz rmbb icqc ojyf", // Your password (or an app-specific password)
  },
});

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

const terms = new mongoose.Schema({
  tc_title: String,

  tc_content: String,

  pp_title: String,
  pp_content: String,

  faq_title: String,
  faq_content: String,

  refund_title: String,
  refund_content: String,
});

const Contact = mongoose.model("Contact", schema);
const Terms = mongoose.model("Terms", terms);

app.post("/api/contact", async (req, res) => {
  try {
    // Send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"Om agrawal" <agrawalom755@gmail.com>', // sender address
      to: mail, // list of receivers
      subject: "servii", // Subject line
      text: "Hey their we will reach out to you soon", // plain text body
      html: "<b>Hello world?</b>", // html body
    });

    console.log("Message sent: %s", info.messageId);
    // res.send("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    // res.status(500).send("Error sending email");
  }
  const mail = req.body.email;

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
    // Send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"Om agrawal" <agrawalom755@gmail.com>', // sender address
      to: mail, // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>", // html body
    });

    console.log("Message sent: %s", info.messageId);
    // res.send("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    // res.status(500).send("Error sending email");
  }
});

app.post("/api/terms", async (req, res) => {
  try {
    const terms = new Terms({
      tc_title: req.body.tc_title,
      tc_content: req.body.tc_content,
      pp_title: req.body.pp_title,
      pp_content: req.body.pp_content,
      faq_title: req.body.faq_title,
      faq_content: req.body.faq_content,
      refund_title: req.body.refund_title,
      refund_content: req.body.refund_content,
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
    const {
      tc_title,
      tc_content,
      pp_title,
      pp_content,
      faq_title,
      faq_content,
      refund_title,
      refund_content,
    } = req.body;

    // Find the terms by ID
    const terms = await Terms.findById(req.params.id);

    // Update the terms with the provided data
    terms.tc_title = tc_title;
    terms.tc_content = tc_content;
    terms.pp_title = pp_title;
    terms.pp_content = pp_content;
    terms.faq_title = faq_title;
    terms.faq_content = faq_content;
    terms.refund_title = refund_title;
    terms.refund_content = refund_content;

    // Save the updated terms
    await terms.save();

    // Respond with success message
    res.status(200).json({
      message: "Terms updated successfully",
    });
  } catch (error) {
    console.error("Error updating terms:", error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
});

// to delete a term
app.delete("/api/terms/:id", async (req, res) => {
  try {
    const terms = await Terms.deleteOne({ _id: req.params.id });
    if (terms.deletedCount === 1) {
      res.status(201).json({
        message: "Terms deleted successfully",
      });
    } else {
      res.status(404).json({
        message: "Terms not found",
      });
    }
  } catch (error) {
    console.error("Error deleting terms:", error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
});
app.use(express.static(path.join(__dirname, "/client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});
