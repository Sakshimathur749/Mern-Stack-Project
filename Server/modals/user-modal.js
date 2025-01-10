const {Schema,model } = require('mongoose')
const userSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique: true
    },
    role:{
        type:String,
        enum:['admin'],
    },
    password:{
        type:String,
        required:true
    }
},{timestamps:true})

const UserModel= new model('users',userSchema)


module.exports =  UserModel