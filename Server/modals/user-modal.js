const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    firstname:{
        type:String,
        require:true,
    },
    lastname:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    phone:{
        type:String,
        require:true,
    },
    subject:{
        type:String,
        require:true,
    },
    message:{
        type:String,
        require:true,
    },
});

const User = new mongoose.model('User',userSchema);
module.exports = User;