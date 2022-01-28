const experss = require("express");
const router = experss.Router();
const getInfo = require("../Controllers/getInfo");
const updateInfo = require("../Controllers/updateInfo");
const rateLimiter = require("../Middleware/rateLimiter");

router.get("/", getInfo);
router.post("/", rateLimiter,
    updateInfo)

module.exports = router;