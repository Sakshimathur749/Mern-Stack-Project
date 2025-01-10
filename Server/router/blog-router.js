const express = require("express");
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const router = express.Router();
const Blog = require('../modals/blog-modal');
const {createBlogs} = require('../controllers/blog-controller')
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadDir = path.join(__dirname, "../../admin/src/images/uploads");
        console.log("Uploading file to:", uploadDir);
        if (!fs.existsSync(uploadDir)) {
       fs.mkdirSync(uploadDir, { recursive: true });
        }
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
      if (!file || !file.originalname) {
        console.log("File is missing or invalid");
        return cb(new Error("Invalid file"));
    }
    const filename = Date.now() + '-' + file.originalname;
    cb(null, filename);
    console.log("Saving file as:", filename);
    },
});

const upload = multer({ storage: storage,limits: { fileSize: 5 * 1024 * 1024 }},);

router.route("/blog").post(upload.single('image'), async (req, res) => {
    if (req.fileValidationError) {
        return res.status(400).json({ message: "Invalid file format!" });
    }
    try {
        await createBlogs(req, res);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error creating blog post", error: error.message });
    }
}); 
router.route("/blog").get(async (req, res) => {
    try {
      const blogs = await Blog.find();
      const blogsWithImageUrl = blogs.map(blog => {
        if (blog.imageUrl) {
          blog.imageUrl = `/uploads/${path.basename(blog.imageUrl)}`; 
        }
        return blog;
      });
  
      res.status(200).json(blogsWithImageUrl);
    } catch (error) {
      res.status(500).json({ message: 'Failed to retrieve blogs', error: error.message });
    }
  });
  router.route("/blog/:id").put(upload.single('image'), async (req, res) => {
    try {
      const { id } = req.params;
      const { title, category, content } = req.body;
        let imageUrl = req.body.imageUrl || ''; 
      if (req.file) {
        imageUrl = `/uploads/${req.file.filename}`;
      }
  
      const blog = await Blog.findByIdAndUpdate(id, { title, category, content, imageUrl }, { new: true });
  
      if (!blog) {
        return res.status(404).json({ message: "Blog post not found" });
      }
      res.status(200).json({
        message: "Blog post updated successfully!",
        blog,
        imageUrl,     });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error updating blog post", error: error.message });
    }
  });
 router.route("/blog/:id").get(async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);  
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({ message: "Error fetching blog", error: error.message });
  }
});
router.route("/blog/:id").delete(async (req, res) => {
  try {
    const { id } = req.params;

    const blog = await Blog.findById(id);
    if (!blog) {
      return res.status(404).json({ message: "Blog post not found" });
    }

    if (blog.imageUrl) {
      const imagePath = path.join(__dirname, "../../admin/src/images/uploads", path.basename(blog.imageUrl));
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
        console.log("Image deleted:", imagePath);
      }
    }

    await Blog.findByIdAndDelete(id);

    res.status(200).json({ message: "Blog post and associated image deleted successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting blog post", error: error.message });
  }
});

module.exports =router;