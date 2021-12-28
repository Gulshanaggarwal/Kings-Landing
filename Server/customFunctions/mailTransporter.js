const nodeMailer=require("nodemailer");
require("dotenv").config();
const transporter = nodeMailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.COMPANY_EMAIL,
      pass: process.env.EMAIL_PASS,
    },
  });

module.exports=transporter;