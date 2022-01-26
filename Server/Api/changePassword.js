const express = require("express");
const router = express.Router();
const userModel = require("../Models/user");
const bcrypt = require("bcrypt");
const rateLimiter = require("../Middleware/rateLimiter");
const joi = require("joi");


const schema = joi.object({

    oldPassword: joi.string().min(6).max(15)
})


router.post("/",
    rateLimiter,
    async (req, res) => {

        const { oldPassword, newPassword, token } = req.body;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ status: "error", message: "Please enter valid inputs only!" });
        }

        try {
            const { password: hashPassword } = await userModel.findOne({ userName }, 'password').exec();
            const match = await bcrypt.compare(oldPassword, hashPassword);

            if (match) {
                const saltRounds = 10;
                const newhashPassword = await bcrypt.hash(newPassword, saltRounds);
                await userModel.findOneAndUpdate({ userName }, { "password": newhashPassword });
                res.status(200).json({ status: "ok", message: "Password Changed Successfully!" })
            }
            else {
                res.status(401).json({ status: "error", message: "Old password doesn't match" });
            }



        } catch (error) {
            res.status(500).json({ status: "error", message: "Server Error!" })

        }

    }
)

module.exports = router;