const experss = require("express");
const router = experss.Router();
const getInfo = require("../Controllers/getInfo");
const updateInfo = require("../Controllers/updateInfo");
const { body} = require('express-validator');


router.get("/:userName", getInfo);
router.post("/", body('userName').isEmail(),
    body('fullName').not().isEmpty().escape().isLength({ min: 1, max: 20 }),
    body('phoneNumber').not().isEmpty().escape().isLength({ min: 10, max: 10 }),
    body('homeState').not().isEmpty().escape().isLength({ min: 3, max: 15 }),
    updateInfo)

module.exports = router;