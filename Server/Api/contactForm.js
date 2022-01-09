const express = require("express");
const router = express.Router();
const pug = require("pug");
const transporter=require("../customFunctions/mailTransporter");
const rateLimiter=require("../Middleware/rateLimiter");
const { body, validationResult } = require('express-validator');


router.post('/',
body('fullName').not().isEmpty().trim().escape().isLength({min:1,max:25}),
body('email').isEmail().normalizeEmail(),
body('message').not().isEmpty().trim().escape().isLength({min:1,max:150}),
rateLimiter, async (req, res) => {

  const { fullName, email, message} = req.body;


  const errors = validationResult(req);
  if (!errors.isEmpty()) {
      return res.status(400).json({status:"error",message:"Enter valid format of inputs only!"});
  }


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
      res.status(200).json({ status: "ok",message:"We have received your request, will contact you very soon!" });

    } catch (error) {
      res.status.json({ status: "error",message:"Error occurred try again!" });

    }

  
  




})

module.exports = router;