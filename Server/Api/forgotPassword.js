const express = require("express");
const router = express.Router();
const { body, validationResult } = require('express-validator');
const userModel = require("../Models/user");
const randomOTP = require("../customFunctions/randomOTP");
const transporter = require("../customFunctions/mailTransporter");
const trackResetOTP = require("../Models/trackResetOTP");



router.post("/",
    body('userName').isEmail().normalizeEmail(),
    (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ status: "error", message: "Enter a valid Email address" });
        }

        const { userName } = req.body;

        try {
            await userModel.findOne({ userName }).exec();

            const randOTP = randomOTP();

            const mailOptions = {
                from: process.env.COMPANY_EMAIL,
                to: userName,
                subject: "Forgot Password | Kings Landing",
                html: `OTP for Forgot Password ${randOTP}`
            }

            transporter.sendMail(mailOptions, (err) => {
                if (err) res.status(500).json({ status: "server error", message: "Couldn't send OTP, try again!" })
                await trackResetOTP.create({ userName, resetOTP: randOTP });
                res.status(200).json({ status: "ok", message: "OTP Sent Successfully" })

            })



        } catch (error) {
            res.status(500).json({ status: "ok", message: "Server error! Try again" })

        }


    })

module.exports = router;