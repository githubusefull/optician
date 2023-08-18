import express  from "express";
import Contact from "../models/contact.js";
//import bcrypt from 'bcryptjs';

const router = express.Router();

router.post("/contact", async(req, res) => {
  const {fullname,email,contact} = req.body;
  try{    
    const oldUser = await Contact.findOne({email:req.body.email});
    if (oldUser) {
     return res
     .status(402)
     .send({ error: "User Exist"});
    }

    await Contact.create({
      fullname,
      email,
      contact,
     
    });
    res.send({status:"Ok"})
  } catch (error) {
    res.send({status:"Error"})
  }
})

export default router