const express=require("express");
const app=express();
const bodyParser=require("body-parser");
const cors=require('cors');
const mongoose=require("mongoose");

const contactForm=require("./Api/contactForm");
const login=require("./Api/login")
const register=require("./Api/register");
const verifyRegisterOTP=require("./Api/verifyRegisterOTP");
const verifyJwt=require("./Api/jwtVerify")

require("dotenv").config();


const PORT=process.env.PORT || 5000;  // Port

/*
const corsOptions={                                       // set cors option
    origin:process.env.ALLOWED_CORS_ORIGIN,
    optionsSuccessStatus: 200
}
*/
mongoose.connect(process.env.DB_URL,{ useNewUrlParser: true, useUnifiedTopology: true });       // connect with Mongo Atlas

app.set("view engine","pug")  
app.use(cors())    ;     // set template engine

app.use(bodyParser.json());             // parse the body

/*
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", process.env.ALLOWED_CORS_ORIGIN);
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next()
  });*/


app.use("/contact-form",contactForm);
app.use("/login",login);
app.use("/register",register);
app.use("/verify-register-OTP",verifyRegisterOTP);
app.use("/verifyJwt",verifyJwt);

app.get("*",(req,res)=>{
    res.send("Invalid Request!");
})



app.listen(PORT,()=>console.log("Express server ready"));