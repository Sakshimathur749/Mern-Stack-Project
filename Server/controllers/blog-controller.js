const blog = require('../modals/blog-modal');
const createBlogs = async (req,res) => {
    console.log("Received request body:", req.body);
    console.log("Received file:", req.file);
    try {
        const { title, category, content ,slug} = req.body;
        let imageUrl = req.file &&`/uploads/${req.file.filename}` ; 
        const date = new Date().toISOString();
        const newBlog = new blog({
            title,
            category,
            content,
            imageUrl,
            date,
            slug
        });
        await newBlog.save();
        res.status(201).json({ message: "Blog post created successfully!", blog: newBlog, imageUrl });
    }
    catch(error) {
        console.error(error);
        res.status(500).json({ message: "Error creating blog post", error: error.message });
    }
}

module.exports = {createBlogs};