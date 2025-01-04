const {Schema,model } = require('mongoose')
const BlogSchema = new Schema({
    title: { type: String, required: true },
  content: { type: String, required: true },
  category: { type: String, required: true },
  image: { type: String },
})

const Blog = new model('blog' , BlogSchema);
module.exports = Blog