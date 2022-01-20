const express = require("express");
const router = express.Router();
const { param, validationResult } = require("express-validator");
const residencyModel = require("../Models/residencyModel");

router.get("/:residencyID",
    param("residencyID").not().isEmpty().trim().escape().isLength({ min: 24, max: 24 }),
    async (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ status: "error", message: "404 not found!" });
        }

        const { residencyID } = req.params;

        try {

            const residency = await residencyModel.findOne({ _id: residencyID }).exec();
            if (residency) {
                console.log(residency);
                res.status(200).json({ status: "ok", message: "residency found!", residency })
            }
            else {
                res.status(400).json({ status: "error", message: "Bad Request! Page Not found" })
            }
        } catch (error) {
            res.status(500).json({ status: "error", message: "Server error try again" })

        }
    })

module.exports = router;