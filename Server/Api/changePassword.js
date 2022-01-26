const express = require("express");
const router = express.Router();
const userModel = require("../Models/user");
const bcrypt = require("bcrypt");
const rateLimiter = require("../Middleware/rateLimiter");
const joi = require("joi");
const verifyJWT = require("../customFunctions/verifyJwt")


const schema = joi.object({

    oldPassword: joi.string().min(6).max(15),
    newPassword: joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{6,15}$')),
    token: joi.string().required()
})


router.post("/",
    rateLimiter,
    async (req, res) => {

        const { oldPassword, newPassword } = req.body;
        const token = req.headers["x-access-token"];

        try {

            await schema.validateAsync({ oldPassword, newPassword, token });
            const user = verifyJWT(token);

            if (user) {
                const { userName } = user;

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

            }
            else {
                res.status(401).json({ status: "error", message: "You are not authorised to perform the action!" })
            }

        } catch (error) {
            if (error.details[0].path.includes("newPassword")) {
                res.status(400).json({ status: "error", message: "Password must be 6-15 characters long & can contains only numbers,alphabets" })
            }
            else {
                res.status(400).json({ status: "error", message: error.details[0].message })
            }

        }

    }
)

module.exports = router;