const express = require("express");
const router = express.Router();
const trackRegisterOTP = require("../Models/trackregisterOTP");
const userModel = require("../Models/user")
const { body, validationResult } = require('express-validator');
const rateLimiter=require("../Middleware/rateLimiter");

router.post("/",
    rateLimiter,
    body('OTP').not().isEmpty().trim().escape().isLength({ min: 6, max: 6 }),
    body('processId').not().isEmpty().trim().escape().isLength({ min: 24, max: 24 }),
    async (req, res) => {
        const { OTP, processId } = req.body;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({status:"error",message:"OTP must be of six digits only !"});
        }


        try {
            const result = await trackRegisterOTP.findOne({ "_id": processId }).exec();
            if (result) {
                const { registerOTP, fullName, userName, password } = result;
                if (OTP === registerOTP) {
                    try {
                        await userModel.create({ fullName, userName, password });
                        res.status(200).json({ status: "ok", message:"Successfully Verified, Login now!" })
                    } catch (error) {
                        res.status(500).json({ status: "error",message:"Server Error !" })
                    }
                }
                else {
                    res.status(401).json({ status: "error", message:"Enter a valid OTP !" })
                }
            }
        }
        catch (err) {
            res.status(500).json({ status: "error", message:"Server Error !"})

        }





    })

module.exports = router;