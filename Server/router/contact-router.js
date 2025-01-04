const express = require("express");
const Contact = require('../modals/contact-modal');
const router = express.Router();
const ContactForm = require('../controllers/contact-controller')

router.route("/contact").post(ContactForm)
router.route("/contact").get(async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.status(200).json(contacts); 
    } catch (error) {
        res.status(500).json({ message: "Failed to retrieve contacts", error: error.message });
    }
});
module.exports =router;