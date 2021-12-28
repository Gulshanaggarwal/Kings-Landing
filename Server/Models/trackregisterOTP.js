const mongoose=require("mongoose");



const registerOTPSchema=new mongoose.Schema({
    registerOTP:{
        type:String,
        required:true
    },
    fullName:{
        type:String,
        required:true
    },
    userName:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
    
})

const trackregisterOTP= new mongoose.model("registerOTP",registerOTPSchema)

module.exports=trackregisterOTP;