const router = require("../Api/getUpdateInfo");
const userModel = require("../Models/user");
const joi = require("joi");
const verifyJWT = require("../customFunctions/verifyJwt")



const schema = joi.object({
    fullName: joi.string().min(1).max(25).required(),
    phoneNumber: joi.string().min(10).max(10).required(),
    homeState: joi.string().min(3).max(15).required(),
    token: joi.string().required()
})


const updateInfo = async (req, res) => {

    const { fullName, phoneNumber, homeState } = req.body;
    const token = req.headers["x-access-token"];

    try {

        await schema.validateAsync({ fullName, phoneNumber, homeState, token })

        const user = verifyJWT(token);
        if (user) {
            const { userName } = user;
            await userModel.findOneAndUpdate({ userName }, { fullName, phoneNumber, homeState });
            res.status(200).json({ status: "ok", message: "Success" })
        }
        else {
            res.status(401).json({ status: "error", message: "You are not authorised to perform the action!" })
        }
    } catch (error) {

        res.status(400).json({ status: "error", message: error.details[0].message });

    }



}

module.exports = updateInfo;