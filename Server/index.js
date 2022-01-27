const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors');
const mongoose = require("mongoose");

const contactForm = require("./Api/contactForm");
const login = require("./Api/login")
const register = require("./Api/register");
const verifyRegisterOTP = require("./Api/verifyRegisterOTP");
const verifyJwt = require("./Api/jwtVerify");
const residencyData = require("./Api/residencyData");
const getUpdateInfo = require("./Api/getUpdateInfo");
const ChangePassword = require("./Api/changePassword");
const bookingRequest = require("./Api/bookingRequest");
const forgotPassword = require("./Api/forgotPassword");
const verifyForgotPassword = require("./Api/verifyForgotPassword");
const findEachResidency = require("./Api/eachResidency");

require("dotenv").config();


const PORT = process.env.PORT || 5000;  // Port

/*
const corsOptions={                                       // set cors option
    origin:process.env.ALLOWED_CORS_ORIGIN,
    optionsSuccessStatus: 200
}
*/
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });// connect with Mongo Atlas



app.set("view engine", "pug")  // set template engine    ;     

app.use(bodyParser.json());             // parse the body

const whiteList = [
  "https://www.kingslandingindia.in",
  "http://localhost:3000"
]

const corsOptionsDelegate = function (req, callback) {
  let corsOptions;
  if (whiteList.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false } // disable CORS for this request
  }
  callback(null, corsOptions) // callback expects two parameters: error and options
}
/*
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", process.env.ALLOWED_CORS_ORIGIN);
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next()
  });*/

app.use(cors(corsOptionsDelegate))
app.use("/contact-form", contactForm);
app.use("/login", login);
app.use("/register", register);
app.use("/verify-register-OTP", verifyRegisterOTP);
app.use("/verifyJwt", verifyJwt);
app.use("/residencyData", residencyData);
app.use("/getUpdateInfo", getUpdateInfo);
app.use("/changePassword", ChangePassword);
app.use("/book-request", bookingRequest);
app.use("/forgot-password", forgotPassword);
app.use("/verify-forgot-password", verifyForgotPassword)
app.use("/each-residency", findEachResidency);





app.listen(PORT, () => console.log("Express server ready"));