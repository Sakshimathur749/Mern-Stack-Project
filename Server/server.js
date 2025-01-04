require('dotenv').config();
const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const authRoute = require('./router/auth-router');
const ContactRoute = require ('./router/contact-router')
const GetaQuoteRoute = require ('./router/getquote-router')
const EnquieryFormRoute = require('./router/enquiery-router')
const BlogRoute = require('./router/blog-router')
const connectdb = require('./utils/db')


app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api',GetaQuoteRoute);
app.use('/api/auth', authRoute);
app.use('/api/form',ContactRoute);
app.use('/api/post',BlogRoute);
app.use('/form',EnquieryFormRoute);
app.use('/uploads', express.static('uploads'));

const PORT =process.env.PORT || 5000;
connectdb(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{
    app.listen(PORT, ()=>{
        console.log(`server is running at port :${PORT}`);
    })
})