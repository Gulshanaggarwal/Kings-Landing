const express = require("express");
const router = express.Router();
const residencyModel=require("../Models/residencyModel");





router.get("/:location",async(req,res)=>{


    const {location}=req.params;

    if(location!=="null"){
        try{
            const residencyData=await residencyModel.find({area:location}).exec();
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