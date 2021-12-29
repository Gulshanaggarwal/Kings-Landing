const express = require("express");
const router = express.Router();
const residencyModel=require("../Models/residencyModel");
let residencyData=[];




router.get("/",async(req,res)=>{

    if(Object.keys(req.body).length===0){
        try{
            let residencyData=await residencyModel.find().exec();
            res.json({status:"ok",message:"success",data:residencyData})
        }
        catch{
           res.json({status:"error",message:"server error"})
        }
    }
    else{
        res.json({status:"error",message:"server error"})
    }
    
})


module.exports=router;