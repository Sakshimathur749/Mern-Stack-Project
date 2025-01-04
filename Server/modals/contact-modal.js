const {Schema,model } = require('mongoose')
const contactSchema = new Schema({
    firstname:{type:String , required:true},
    lastname:{type:String,  require:true},
    phone:{type:String , required:true},
    email:{type:String , required:true},
    subject:{type:String,  require:true},
    message:{type:String , required:true}
})

const Contact = new model('Contact' , contactSchema);
module.exports = Contact