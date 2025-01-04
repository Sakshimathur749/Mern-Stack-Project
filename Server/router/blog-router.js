const express = require("express");
const multer = require('multer');
const router = express.Router();
const Blog = require('../modals/blog-modal');
const {createBlogs} = require('../controllers/blog-controller')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    },
});

const upload = multer({ storage: storage });

router.route("/blog").post(upload.single('image'), createBlogs); 
router.route("/blog").get(async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.status(200).json(blogs); 
    } catch (error) {
        res.status(500).json({ message: "Failed to retrieve contacts", error: error.message });
    }
});
module.exports =router;