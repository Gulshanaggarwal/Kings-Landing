const express = require("express");
const router = express.Router();
const userModel = require("../Models/user");
const randomOTP = require("../customFunctions/randomOTP");
const transporter = require("../customFunctions/mailTransporter");
const trackRegisterOTP = require("../Models/trackregisterOTP");
const bcrypt=require("bcrypt");
const { body, validationResult } = require('express-validator');


router.post("/",
body('fullName').not().isEmpty().escape().isLength({min:1,max:20}),
body('userName').isEmail().normalizeEmail(),
body('password').not().isEmpty().escape().isLength({min:6,max:15}),
 async (req, res) => {
    const { fullName, userName, password } = req.body;

    const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({status:"error",message:"Enter valid inputs only"});
        }

    try {
        const result = await userModel.findOne({ userName }).exec();
        if (result) {
            res.status(400).send({ status: "ok", message:"Email already registered !" })
        }
        else {
            // send OTP at email address

            const randOTP = randomOTP();

            const mailOptions = {
                from: process.env.COMPANY_EMAIL,
                to: userName,
                subject: "REGISTER OTP",
                html: `OTP for Registration ${randOTP}`
            }

            // finally send mail

            try {
                await transporter.sendMail(mailOptions, async (err, result) => {

                    if (err) {
                        console.log(err);
                        res.status(500).json({ status: "error",message:"Server Error !" })
                    }
                    else {
                        const saltRounds=10;
                        const hashPassword=await bcrypt.hash(password,saltRounds);
                        try {
                            const result = await trackRegisterOTP.create({ registerOTP: randOTP, fullName, userName, password:hashPassword });
                            res.json({ status: "ok", OTPSent: true, processId:result._id,message:"OTP sent successfully!" })

                        } catch (error) {
                            res.status(500).json({ status: "error",message:"Server Error !" })

                        }
                    }

                });


            } catch (error) {
                res.status(500).json({ status: "error",message:"Server Error !" })

            }


        }
    } catch (error) {
        res.status(500).json({ status: "error",message:"Server Error !" })
    }

})


module.exports = router;