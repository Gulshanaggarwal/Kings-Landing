const express = require("express");
const router = express.Router();
const residencyModel=require("../Models/residencyModel");
let residencyData=[];




router.get("/:location",async(req,res)=>{


    const {location}=req.params;

    if(location!=="null"){
        try{
            let residencyData=await residencyModel.find({area:location}).exec();
            console.log("res",residencyData.length);
            res.json({status:"ok",message:"success",data:residencyData})
        }
        catch{
           res.json({status:"error",message:"server error"})
        }
    }
    else{
        try{
            let residencyData=await residencyModel.find().exec();
            res.json({status:"ok",message:"success",data:residencyData})
        }
        catch{
           res.json({status:"error",message:"server error"})
        }
        
    }
    
})


module.exports=router;