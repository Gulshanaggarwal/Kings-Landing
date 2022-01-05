const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const userModel = require("../Models/user");
const transporter = require("../customFunctions/mailTransporter");
const pug = require("pug");


router.post("/",
    body('userName').isEmail().normalizeEmail(),
    body('fullName').not().isEmpty().escape().isLength({ min: 1, max: 25 }),
    body('phoneNumber').not().isEmpty().escape().isLength({ min: 10, max: 10 }),
    body('residency').not().isEmpty().escape().isLength({ min: 1, max: 15 }),
    body("category").not().isEmpty().escape().isLength({ min: 1, max: 15 }),
    async (req, res) => {


        const { userName, fullName, phoneNumber, residency, category } = req.body;

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ status: "error", message: "Enter valid format of inputs only!" });
        }

        try {
            await userModel.findOne({userName}).exec();
            // Now send email request to company 

            const bookingTemplate= pug.compileFile("Templates/bookingTemplate.pug");

            const mailOptions={
                from: process.env.COMPANY_EMAIL,
                to: userName,
                subject: "Booking Request",
                html:bookingTemplate({ userName, fullName, phoneNumber, residency, category })
                
            }

            transporter.sendMail(mailOptions,(err)=>{
                if(err){
                    res.status(500).json({status:"error",message:"Server Error!"})
                }
                res.status(200).json({status:"ok",message:"Request received successfully!"})
            })




        } catch (error) {

            res.status(500).json({status:"error",message:"Server Error!"})
            
        }


    })