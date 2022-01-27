const express = require("express");
const router = express.Router();
const userModel = require("../Models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { body, validationResult } = require('express-validator');
const rateLimiter = require("../Middleware/rateLimiter");

router.post("/",
    rateLimiter,
    body('userName').isEmail().normalizeEmail(),
    body('password').not().isEmpty().trim().escape().isLength({ max: 15 }),
    async (req, res) => {
        const { userName, password } = req.body;

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ status: "error", message: "Enter valid format of inputs only!" });
        }

        try {
            const user = await userModel.findOne({ userName }).exec();
            if (user) {
                const { password: hashPassword, fullName } = user;
                const match = await bcrypt.compare(password, hashPassword);

                if (match) {
                    // assign JWT
                    const token = jwt.sign({ fullName, userName }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRY });
                    res.status(200).json({ status: "ok", user: true, token, message: "logged in successfully !" })
                }
                else {
                    res.status(401).json({ status: "error", message: "Invalid  Credentials!" })
                }

            }
            else {
                res.status(400).json({ status: "error", message: "You are not a registered user!" })
            }

        } catch (error) {
            res.status(500).json({ status: "error", message: "Server Error !" })
        }
    })

module.exports = router;