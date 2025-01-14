const express = require("express");
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const applyjob = require('../modals/jobform-modal');
const router = express.Router();
const jobform = require('../controllers/jobform-controller')
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
     const uploadDir = path.join(__dirname, "../../admin/src/file");
      console.log("Uploading file to:", uploadDir);
      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
      }
      cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname)); 
    }
  });
  const upload = multer({ storage: storage });

router.route("/apply").post(upload.single("resume"), jobform)
router.route("/apply").get(async (req, res) => {
    try {
        const applications = await applyjob.find();
        const applicationsWithFileUrls = applications.map(application => {
          return {
            ...application.toObject(),
          };
        });
        res.status(200).json(applicationsWithFileUrls); 
    } catch (error) {
        res.status(500).json({ message: "Failed to retrieve jobform", error: error.message });
    }
});
module.exports =router;