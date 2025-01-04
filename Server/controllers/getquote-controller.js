const getquote = require('../modals/getquote-modal');
const getaquote = async (req,res) => {
    try {
        const response = req.body;
        await getquote.create(response);
        return res.status(200).json({message:"Success" });
    } catch (error) {
        return res.status(500).json({message:"Failed" });
    }
}

module.exports = getaquote