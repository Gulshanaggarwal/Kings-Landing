const express = require("express");
const router = express.Router();
const userModel = require("../Models/user");
const transporter = require("../customFunctions/mailTransporter");
const pug = require("pug");
const rateLimiter = require("../Middleware/rateLimiter");
const verifyJWT = require("../customFunctions/verifyJwt");
const joi = require("joi");


const schema = joi.object({
    fullName: joi.string().min(1).max(25),
    phoneNumber: joi.string().min(10).max(10),
    residencyId: joi.string().min(24).max(24),
    residency: joi.string().min(1).max(30),
    category: joi.string().min(1).max(15),
    token: joi.string().required()

})


router.post("/",
    rateLimiter,
    async (req, res) => {


        const { fullName, phoneNumber, residencyId, residency, category } = req.body;
        const token = req.headers["x-access-token"];


        try {

            await schema.validateAsync({ fullName, phoneNumber, residencyId, residency, category, token });

            const user = verifyJWT(token);
            if (user) {
                const { userName } = user;
                await userModel.findOne({ userName }).exec();
                // Now send email request to company 

                const bookingTemplate = pug.compileFile("Templates/bookingTemplate.pug");

                const mailOptions = {
                    from: process.env.COMPANY_EMAIL,
                    to: process.env.COMPANY_EMAIL,
                    subject: "Booking Request",
                    html: bookingTemplate({ userName, fullName, phoneNumber, residencyId, residency, category })

                }

                transporter.sendMail(mailOptions, (err) => {
                    if (err) {
                        res.status(500).json({ status: "error", message: "Server Error!" })
                    }
                    res.status(200).json({ status: "ok", message: "Request received successfully!" })
                })
            }
            else {
                res.status(401).json({ status: "error", message: "You are not authorised to perform the action!" })
            }




        } catch (error) {


            res.status(400).json({ status: "error", message: error.details[0].message })

        }


    })


module.exports = router;