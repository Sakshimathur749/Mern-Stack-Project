const Contact = require('../modals/contact-modal');
const ContactForm = async (req,res) => {
    try {
        const response = req.body;
        await Contact.create(response);
        return res.status(200).json({message:"Success" });
    } catch (error) {
        return res.status(500).json({message:"Failed" });
    }
}

module.exports = ContactForm