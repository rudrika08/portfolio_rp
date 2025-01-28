const nodemailer = require('nodemailer');
require('dotenv').config();

// Create Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail', // Or another email provider
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Send Email Function
const sendMail = (name, email, message) => {
  return transporter.sendMail({
    from: email,
    to: process.env.RECEIVING_EMAIL, // Your email
    subject: `New Contact Form Submission from ${name}`,
    text: message,
  });
};

module.exports = { sendMail };
