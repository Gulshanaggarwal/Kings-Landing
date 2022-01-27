const express = require("express");
const router = express.Router();
const residencyModel = require("../Models/residencyModel");
const joi = require("joi");
const verifyJWT = require("../customFunctions/verifyJwt")

const schema = joi.object({
    location: joi.string().min(1).max(25),
    token: joi.string().required()
})




router.get("/:location", async (req, res) => {


    const { location } = req.params;
    const token = req.headers["x-access-token"];

    console.log(location);


    try {

        await schema.validateAsync({ location, token });
        const user = verifyJWT(token);

        if (user) {
            if (location !== "null") {
                const residencyData = await residencyModel.find({ area: location }).exec();
                res.status(200).json({ status: "ok", message: "success", data: residencyData })

            }
            else {
                const residencyData = await residencyModel.find().exec();
                res.status(200).json({ status: "ok", message: "success", data: residencyData })
            }

        }
        else {
            res.status(401).json({ status: "error", message: "You are not authorised to perform the action!" })
        }

    } catch (error) {

        res.status(500).json({ status: "error", message: "server error try again!" })

    }


})


module.exports = router;