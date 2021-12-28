const express = require("express");
const router = express.Router();
const nodeMailer = require("nodemailer");
const pug = require("pug");
const fetch = require("node-fetch");
const transporter=require("../customFunctions/mailTransporter")


router.post('/', async (req, res) => {

  const { fullName, email, message, token } = req.body;

  const url = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.CAPTCHA_SECRET_KEY}&response=${token}`;

  const result = await fetch(url, { method: "POST" });
  const captcha_response = await result.json();

  if (captcha_response.success) {

    const compiledFunction = pug.compileFile("Templates/contactForm.pug");



    const mailOptions = {
      from: process.env.COMPANY_EMAIL,
      to: process.env.COMPANY_EMAIL,
      subject: "Form Submission",
      html: compiledFunction({ fullName, email, message })
    }

    // finally send mail

    try {
      await transporter.sendMail(mailOptions);
      res.send({ status: "ok" });

    } catch (error) {
      res.send({ status: "error" });

    }

  }
  else {
    res.send({ status: "error", message: "Recaptcha verification failed" })
  }





})

module.exports = router;