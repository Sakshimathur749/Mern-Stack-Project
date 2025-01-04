const express = require("express");
const enquiery = require('../modals/enquieryform-modal');
const router = express.Router();
const enquieryForm = require('../controllers/enquieryform-controller')

router.route("/equieryform").post(enquieryForm)
router.route("/equieryform").get(async (req, res) => {
    try {
        const enquieryforms = await enquiery.find();
        res.status(200).json(enquieryforms); 
    } catch (error) {
        res.status(500).json({ message: "Failed to retrieve enquieryforms", error: error.message });
    }
});
module.exports =router;