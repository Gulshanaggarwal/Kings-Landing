const userModel=require("../Models/user");

const getInfo=async(req,res)=>{

    const {userName}=req.params;

    try {

        const user=await userModel.findOne({userName},'phoneNumber homeState').exec();
        res.status(200).json({status:"ok",user,message:"Success"})
        
    } catch (error) {
        res.status(500).json({status:"error",message:"Server Error try again!"})
        
    }


}

module.exports=getInfo;