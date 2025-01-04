const express = require("express");
const getquote = require('../modals/getquote-modal');
const router = express.Router();
const getquoteForm = require('../controllers/getquote-controller')

router.route("/getaquote").post(getquoteForm)
router.route("/getaquote").get(async (req, res) => {
    try {
        const getquotes = await getquote.find();
        res.status(200).json(getquotes); 
    } catch (error) {
        res.status(500).json({ message: "Failed to retrieve getquotes", error: error.message });
    }
});
module.exports =router;