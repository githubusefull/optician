import express  from "express";
import Appointment from "../models/appointment.js";
//import bcrypt from 'bcryptjs';

const router = express.Router();

router.post('/appointment',  (req, res) => {
  const {date, email, fullname, phone, am, pm} = req.body;
 
  Appointment.create({date, email, fullname, phone, am, pm})
  .then(users => res.json(users))
  .catch(err => res.json(err))
})
 
router.get('/appointments', async (req, res) => {
  const users = await Appointment.find({user : req.params._id});
  res.send(users);
})
export default router