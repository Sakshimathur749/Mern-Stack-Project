const {z} = require("zod");
const signupSchema = z.object({
    firstname: z
    .string({required_error:"firstName is required"}).trim().min(3 ,{message:"firstName must be atleast 3 chars."}).max(10,{message:"firstName not allowed more than 10 words."}),
    lastname: z
    .string({required_error:"lastName is required"}).trim().min(3 ,{message:"lastName must be atleast 3 chars."}).max(10,{message:"lastName not allowed more than 10 words."}),
    email: z
    .string({required_error:"email is required"}).trim().email({message:"Invalid email address"}).min(13 ,{message:"Email must be atleast 13 chars."}).max(50,{message:"Email not allowed more than 50 words."}),
    phone: z
    .string({required_error:"Number is required"}).trim().min(10 ,{message:"Number must be atleast 10 Number."}).max(11,{message:"Number not allowed"}),
    subject: z
    .string({required_error:"Subject is required"}).trim().min(6 ,{message:"Subject must be atleast 6 char"}).max(12,{message:"Subject not allowed more than 12 char"}),
    message: z
    .string({required_error:"Name is required"}).trim().min(3 ,{message:"Message must be atleast 3 chars."}).max(200,{message:"Message not allowed more than 200 words."})
})

module.exports = signupSchema;