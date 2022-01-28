const express = require("express");
const trackResetOTP = require("../Models/trackResetOTP");
const userModel = require("../Models/user");
const router = express.Router();
const bcrypt = require("bcrypt");
const { body, validationResult } = require("express-validator")
const rateLimiter = require("../Middleware/rateLimiter");



router.post("/",
    body('OTP').not().isEmpty().trim().escape().isLength({ min: 6, max: 6 }),
    body("newPassword").not().isEmpty().escape().isLength({ min: 6, max: 15 }).matches(new RegExp('^[a-zA-Z0-9]{6,15}$')),
    body("processID").not().isEmpty().trim().escape().isLength({ min: 24, max: 24 }),
    rateLimiter,
    async (req, res) => {


        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ status: "error", message: "Enter valid format of inputs only!" });
        }

        const { OTP, newPassword, processID } = req.body;

        try {

            const { userName, resetOTP } = await trackResetOTP.findOne({ _id: processID }).exec();

            if (resetOTP === OTP) {
                const saltRounds = 10;
                const newhashPassword = await bcrypt.hash(newPassword, saltRounds);
                await userModel.findOneAndUpdate({ userName }, { "password": newhashPassword });
                res.status(200).json({ status: "ok", message: "Password is successfully reset, you can Login now" })

            }
            else {
                res.status(400).json({ status: "error", message: "Enter a Valid OTP!" })
            }


        } catch (error) {
            res.status(500).json({ status: "error", message: "Server Error! try again!" })

        }


    })

module.exports = router;