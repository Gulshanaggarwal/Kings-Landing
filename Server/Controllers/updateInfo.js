const router = require("../Api/getUpdateInfo");
const userModel=require("../Models/user");
const {validationResult}=require("express-validator");


const updateInfo = async (req, res) => {

    const { userName, fullName, phoneNumber, homeState } = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ status: "error", message: "Enter valid format of inputs only!" });
    }
    else{
        try {
            await userModel.findOneAndUpdate({userName},{fullName,phoneNumber,homeState});
            res.status(200).json({status:"ok",message:"Success"})
            
        } catch (error) {

            res.status(500).json({status:"error", message:"Server Error!"})
            
        }
    }



}

module.exports = updateInfo;