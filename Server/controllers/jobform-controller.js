const applyjob = require('../modals/jobform-modal');
const jobform = async (req,res) => {
    try {
        const { name, email, phone } = req.body;
        const resumePath = req.file && `/file/${req.file.filename}` ; 
    
        if (!name || !email || !phone || !resumePath) {
          return res.status(400).json({ message: "All fields are required, including resume." });
        }
        const newApplication = new applyjob({
          name,
          email,
          phone,
          resume: resumePath, 
        });
        await newApplication.save(); 
        res.status(200).json({ message: "Job application submitted successfully!" });
      } catch (error) {
        res.status(500).json({ message: "Failed to submit the application.", error: error.message });
      }
    
}

module.exports = jobform