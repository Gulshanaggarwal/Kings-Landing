const userModel = require("../Models/user");
const joi = require("joi");
const verifyJWT = require("../customFunctions/verifyJwt");

const schema = joi.object({
    token: joi.string().required()
})

const getInfo = async (req, res) => {

    const token = req.headers['x-access-token'];

    try {
        await schema.validateAsync({ token });
        const user = verifyJWT(token);
        if (user) {
            const { userName } = user;
            const userr = await userModel.findOne({ userName }, 'phoneNumber homeState').exec();
            res.status(200).json({ status: "ok", user: userr, message: "Success" })
        }
        else {
            res.status(401).json({ status: "error", message: "You are not authorised to perform the action!" })
        }

    } catch (error) {
        res.status(500).json({ status: "error", message: "server error try again!" })

    }


}

module.exports = getInfo;