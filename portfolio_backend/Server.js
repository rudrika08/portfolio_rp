// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const { sendMail } = require('./Config/nodemailerConfig');
// require('dotenv').config();

// const app = express();

// // Middleware

// app.use(cors({
//   origin: 'http://localhost:5173', // Replace with your frontend's URL
//   methods: ['POST'],
// }));

// app.use(bodyParser.json());

// // Contact Form Route
// app.post('/contact', async (req, res) => {
//   const { name, email, message } = req.body;

//   if (!name || !email || !message) {
//     return res.status(400).json({ message: 'All fields are required.' });
//   }

//   try {
//     // Send Email
//     await sendMail(name, email, message);
//     res.status(200).json({ message: 'Your message has been sent successfully!' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Failed to send message.' });
//   }
// });

// // Start the server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

const express = require("express");
const nodemailer = require("nodemailer");

const app = express();
app.use(express.json()); // Parse JSON data from the form

const cors = require("cors");
app.use(cors({
  origin: "http://localhost:5173",
  methods: ["POST"],
}));


app.post("/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Configure Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "gmail", 
    auth: {
      user: "rudrika.812@gmail.com", 
      pass: "rudrika08.p", 
    },
  });

  // Email options
  const mailOptions = {
    from: email, // User's email from the form
    to: "rudrika.812@gmail.com", // Where you want to receive the email
    subject: subject || "Contact Form Submission",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send("Email sent successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Failed to send email");
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));