const {Schema,model } = require('mongoose')
const BlogSchema = new Schema({
    title: { type: String, required: true },
  content: { type: String, required: true },
  category: { type: String, required: true },
  slug: { type: String, unique: true, required: true },
  imageUrl: { type: String },
  date: { type: Date, default: Date.now } ,
})

const Blog = new model('blog' , BlogSchema);
module.exports = Blog