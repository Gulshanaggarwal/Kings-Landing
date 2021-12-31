const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const userModel = require("../Models/user");
const bcrypt = require("bcrypt");


router.post("/",
    body('oldPassword').not().isEmpty().trim().escape(),
    body("newPassword").not().isEmpty().trim().escape().isLength({ min: 6, max: 15 }),
    async (req, res) => {

        const { userName, oldPassword, newPassword } = req.body;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ status: "error", message: "Please enter valid inputs only!" });
        }

        try {
            const hashPassword = await userModel.findOne({ userName }, 'password').exec();
            try {
                const match = await bcrypt.compare(oldPassword, hashPassword);

                if (match) {
                    const saltRounds = 10;
                    const newhashPassword = await bcrypt.hash(newPassword, saltRounds);
                    await userModel.findOneAndUpdate({ userName }, { password: newhashPassword });
                    res.status(200).json({ status: "ok", message: "Password Changed Successfully!" })
                }

            } catch (error) {
                res.status(400).json({ status: "error", message: "Old Password doesn't match!" })

            }


        } catch (error) {
            res.status(500).json({ status: "error", message: "Server Error!" })

        }

    }
)

module.exports = router;