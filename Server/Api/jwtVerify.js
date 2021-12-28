const express=require("express");
const router=express.Router();
const jwt=require("jsonwebtoken");

require("dotenv").config();




router.get("/",(req,res)=>{

    const token=req.headers['x-access-token'];

    try{
        const user=jwt.verify(token,process.env.JWT_SECRET);
        if(user){
            res.status(200).json({status:"ok",user,message:"token verified"});
        }
        else{
            res.status(200).json({status:"ok",message:"Invalid token"})
        }
    }catch(err){
        res.status(500).json({status:"error",message:"server error"})
    }


})

module.exports=router;