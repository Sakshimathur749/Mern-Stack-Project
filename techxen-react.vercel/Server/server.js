require('dotenv').config();
const express = require("express");
const cors = require('cors');
const app = express();
const authRoute = require('./router/auth-router');
const ContactRoute = require ('./router/contact-router')
const connectdb = require('./utils/db')


app.use(express.json());
app.use(cors());
app.use('/api/auth', authRoute);
app.use('/api/form', ContactRoute);

const PORT = 5000;
connectdb().then(()=>{
    app.listen(PORT, ()=>{
        console.log(`server is running at port :${PORT}`);
    })
})