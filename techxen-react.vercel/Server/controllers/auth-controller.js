const User = require('../modals/user-modal')
const home = async (req,res) => {
 try {
    res.status(200).send("Welcome to Router");    
 } catch (error) {
    console.log(error);
 }   
}

const contact = async (req,res) => {
    try {
        console.log(req.body);
        const {firstname , lastname, email,phone,subject, message }=req.body;
        const userExist = await User.findOne({email});
        if (userExist) {
         return req.status(400).json({message : "email already exist"});
        }
        await User.create({firstname , lastname, email, phone, subject, message })
        res.status(200).json({data});     
    } catch (error) {
      res.status(500).json('internal server error'); 
    }   
   }
module.exports ={home ,contact}