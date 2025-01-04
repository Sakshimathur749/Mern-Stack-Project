const {Schema,model } = require('mongoose')
const enquieryformSchema = new Schema({
    firstname:{type:String , required:true},
    lastname:{type:String,required:true},
    phone:{type:String , required:true},
    email:{type:String , required:true},
    message:{type:String , required:true}
})

const enquieryform = new model('equieryform' , enquieryformSchema);
module.exports = enquieryform