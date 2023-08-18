import mongoose from "mongoose";

const AppointmentSchema = new mongoose.Schema(
    {
        date: { type: String },
        fullname: { type: String },
        email: { type: String },
        phone: { type: String },
        pm: { type: String}, 
        am: { type: String}, 
    },
     {
   timestamps: true
    }
)
const Appointment = mongoose.model('Appointment', AppointmentSchema)
export default Appointment;