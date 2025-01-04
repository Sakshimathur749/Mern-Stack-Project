const {Schema,model } = require('mongoose')
const getquoteSchema = new Schema({
    firstname:{type:String , required:true},
    phone:{type:String , required:true},
    email:{type:String , required:true},
    message:{type:String , required:true}
})

const getquote = new model('getaquote' , getquoteSchema);
module.exports = getquote