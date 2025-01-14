const {Schema,model } = require('mongoose')
const jobformSchema = new Schema({
    name:{type:String , required:true},
    phone:{type:String , required:true},
    email:{type:String , required:true},
    resume:{type:String , required:true}
})

const jobForm = new model('jobForm' , jobformSchema);
module.exports = jobForm