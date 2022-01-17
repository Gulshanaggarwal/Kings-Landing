const express = require("express");
const trackResetOTP = require("../Models/trackResetOTP");
const userModel = require("../Models/user");
const router = express.Router();
const bcrypt = require("bcrypt");



router.post("/",
    body('OTP').not().isEmpty().trim().escape().isLength({ min: 6, max: 6 }),
    body("newPassword").not().isEmpty().escape().isLength({ min: 6, max: 15 }),
    body("resetProcessID").not().isEmpty().trim().escape().isLength({ min: 24, max: 24 }),
    (req, res) => {


        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ status: "error", message: "Enter valid format of inputs only!" });
        }

        const { OTP, newPassword, resetProcessID } = req.body;

        try {

            const { userName, resetOTP } = trackResetOTP.findOne({ _id: resetProessID }).exec();

            if (resetOTP === OTP) {
                const saltRounds = 10;
                const newhashPassword = await bcrypt.hash(newPassword, saltRounds);
                await userModel.findOneAndUpdate({ userName }, { "password": newhashPassword });
                res.status(200).json({ status: "ok", message: "Password Changed Successfully!" })

            }


        } catch (error) {
            res.status(500).json({ status: "error", message: "Server Error! try again!" })

        }


    })

module.exports = router;