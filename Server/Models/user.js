const mongoose=require("mongoose");


const userSchema=new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    userName:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:String,
        default:""
    },
    homeState:{
        type:String,
        default:""
    },
    CreatedAt:{
        type:String,
        default:Date.now
    }
});

const userModel= new mongoose.model("user",userSchema);

module.exports=userModel;