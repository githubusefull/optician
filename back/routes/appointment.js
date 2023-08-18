import express  from "express";
import Appointment from "../models/appointment.js";
//import bcrypt from 'bcryptjs';

const router = express.Router();

router.post("/appointment", async(req, res) => {
  const {date,fullname,email,phone,pm,am} = req.body;
  try{    
    const oldUser = await Appointment.findOne({email:req.body.email});
    if (oldUser) {
     return res
     .status(402)
     .send({ error: "User Exist"});
    }

    await Appointment.create({
      date,
      fullname,
      email,
      phone,
      pm,
      am,
    });
    res.send({status:"Ok"})
  } catch (error) {
    res.send({status:"Error"})
  }
})
router.get('/appointments', async (req, res) => {
  const users = await Appointment.find();
  res.send(users);
})
export default router