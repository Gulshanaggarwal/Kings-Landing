const rateLimit=require("express-rate-limit");


const rateLimiter=rateLimit({
    windowMs:1*60*1000,
    max:3,
    handler:(req,res)=>res.status(429).json({status:"error",message:"Limit exceed, try again after sometime!"})
})


module.exports=rateLimiter;