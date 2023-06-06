// Packages
const express = require("express");
const nodeMailer = require("nodemailer");

// Router
const router = express.Router();

// Base API Route
router.get("/", (req, res) => res.send("Welcome to API Routes"));

router.post("/mail", async (req, res) => {
  const transporter = nodeMailer.createTransport({
    port: 465,
    secure: true,
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  const { name, email, subject, message } = req.body;

  const mailData = {
    from: "<biswasabhi93@gmail.com>",
    to: "biswasabhi379@gmail.com",
    subject,
    text: message,
    html: `<p><b>Hey There!</b><br/>${name} sent you a mail his/her email id is ${email}</p>`,
  };

  transporter.sendMail(mailData, (err, info) => {
    if (err) {
      return console.log(err);
    }
    res.status(200).send({ message: "Mail sent", message_id: info.messageId });
  });
});

// Exporting Module
module.exports = router;
