require('dotenv').config();
const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
// const slugify = require('slugify');
const AdminRoute = require('./router/admin-router');
const ContactRoute = require ('./router/contact-router')
const GetaQuoteRoute = require ('./router/getquote-router')
const EnquieryFormRoute = require('./router/enquiery-router')
const BlogRoute = require('./router/blog-router')
const JobformRoute= require('./router/jobform-router')
const connectdb = require('./utils/db')
const path = require('path')
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api',GetaQuoteRoute);
app.use('/api/form',ContactRoute);
app.use('/api/post',BlogRoute);
app.use('/api/job',JobformRoute)
app.use('/form',EnquieryFormRoute);
app.use('/api/auth', AdminRoute);
app.use('/uploads', express.static('uploads'));

const PORT =process.env.PORT || 5001;
connectdb(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{
    app.listen(PORT, ()=>{
        console.log(`server is running at port :${PORT}`);
    })
})