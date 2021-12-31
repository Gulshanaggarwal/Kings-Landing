const userModel=require("../Models/user");

const getInfo=async(req,res)=>{

    const {userName}=req.params;

    try {

        const user=await userModel.findOne({userName},'phoneNumber homeState').exec();
        res.json({status:"ok",user,message:"Success"})
        
    } catch (error) {
        res.send({status:"Server Error!"})
        
    }


}

module.exports=getInfo;