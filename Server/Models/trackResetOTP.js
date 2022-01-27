const mongoose=require("mongoose");


const OTPResetSchema= new mongoose.Schema({

    userName:{
        type:String,
        required:true
    },
    resetOTP:{
        type:String,
        required:true
    }
})

const trackResetOTP= new mongoose.model("trackResetOTP",OTPResetSchema);

module.exports=trackResetOTP;