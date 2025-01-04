const enquieryforms = require('../modals/enquieryform-modal');
const enquiery = async (req,res) => {
    try {
        const response = req.body;
        await enquieryforms.create(response);
        return res.status(200).json({message:"Success" });
    } catch (error) {
        return res.status(500).json({message:"Failed" });
    }
}

module.exports = enquiery