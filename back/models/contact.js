import mongoose from "mongoose";

const ContacttSchema = new mongoose.Schema(
    {
        fullname: { type: String },
        email: { type: String },
        contact: { type: String },
        
    },
     {
   timestamps: true
    }
)
const Contact = mongoose.model('Contact', ContacttSchema)
export default Contact;