const blog = require('../modals/blog-modal');
const createBlogs = async (req,res) => {
    try {
        const { title, category, content } = req.body;
        let image = req.file ? req.file.path : null; 
        const newBlog = new blog({
            title,
            category,
            content,
            image,
        });
        await newBlog.save();
        res.status(201).json({ message: "Blog post created successfully!", blog: newBlog });
    }
    catch(error) {
        console.error(error);
        res.status(500).json({ message: "Error creating blog post", error: error.message });
    }
}

module.exports = {createBlogs};