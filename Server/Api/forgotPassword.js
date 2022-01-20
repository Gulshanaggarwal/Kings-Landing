const express = require("express");
const router = express.Router();
const { body, validationResult } = require('express-validator');
const userModel = require("../Models/user");
const randomOTP = require("../customFunctions/randomOTP");
const transporter = require("../customFunctions/mailTransporter");
const trackResetOTP = require("../Models/trackResetOTP");



router.post("/",
    body('userName').isEmail().normalizeEmail(),
    async (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ status: "error", message: "Enter a valid Email address" });
        }

        const { userName } = req.body;

        try {
            const user = await userModel.findOne({ userName }).exec();

            if (user) {
                const randOTP = randomOTP();

                const mailOptions = {
                    from: process.env.COMPANY_EMAIL,
                    to: userName,
                    subject: "Forgot Password | Kings Landing",
                    html: `OTP for Forgot Password ${randOTP}`
                }

                transporter.sendMail(mailOptions, async (err) => {
                    if (err) res.status(500).json({ status: "server error", message: "Couldn't send OTP, try again!" })
                    const result = await trackResetOTP.create({ userName, resetOTP: randOTP });
                    res.status(200).json({ status: "ok", message: "OTP Sent Successfully", processID: result._id })

                })
            }
            else {
                res.status(401).json({ status: "error", message: "You are not a registered user!" })
            }



        } catch (error) {
            res.status(500).json({ status: "error", message: "Server error! Try again" })

        }


    })

module.exports = router;