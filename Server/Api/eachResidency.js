const express = require("express");
const router = express.Router();
const joi = require("joi");
const verifyJWT = require("../customFunctions/verifyJwt");
const residencyModel = require("../Models/residencyModel");


const schema = joi.object({
    residencyID: joi.string().min(24).max(24),
    token: joi.string().required()
})

router.get("/:residencyID",
    async (req, res) => {

        const { residencyID } = req.params;
        const token = req.headers["x-access-token"];

        try {

            await schema.validateAsync({ residencyID, token });
            const user = verifyJWT(token);

            if (user) {

                const residency = await residencyModel.findOne({ _id: residencyID }).exec();
                if (residency) {
                    console.log(residency);
                    res.status(200).json({ status: "ok", message: "residency found!", residency })
                }
                else {
                    res.status(400).json({ status: "error", message: "Bad Request! Page Not found" })
                }

            }
            else {
                res.status(401).json({ status: "error", message: "You are not authorised to perform the action!" })
            }

        } catch (error) {
            res.status(400).json({ status: "error", message: error.details[0].message })

        }
    })

module.exports = router;