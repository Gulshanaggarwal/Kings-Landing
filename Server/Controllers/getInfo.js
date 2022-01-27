const userModel = require("../Models/user");
const joi = require("joi");
const verifyJWT = require("../customFunctions/verifyJwt");

const schema = joi.object({
    token: joi.string().required()
})

const getInfo = async (req, res) => {

    const { token } = req.headers['x-access-token'];

    try {
        await schema.validateAsync({ token });
        const userr = verifyJWT(token);
        if (userr) {
            const { userName } = userr;
            const user = await userModel.findOne({ userName }, 'phoneNumber homeState').exec();
            res.status(200).json({ status: "ok", user, message: "Success" })
        }
        else {
            res.status(401).json({ status: "error", message: "You are not authorised to perform the action!" })
        }

    } catch (error) {
        if (error.details[0].path.includes("token")) {
            res.status(400).json({ status: "error", message: "not a proper formatted token" })
        }
        else {
            res.status(500).json({ status: "error", message: "server error try again!" })
        }

    }


}

module.exports = getInfo;