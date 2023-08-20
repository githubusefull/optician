import express  from "express";
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import appointRoute from './routes/appointment.js';
import contactRoute from './routes/contact.js';
import bodyParser from  'body-parser';
import  cors from  'cors';
import path from 'path'

dotenv.config();
mongoose.connect(process.env.MONGO_URL)
.then(() => {
  console.log('connected to optician DB');
})
.catch((err) => {
  console.log(err.message);
})
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());


app.use("/api/optician", appointRoute)
app.use("/api/users", contactRoute)
const __dirname = path.resolve();


app.use(express.static(path.join(__dirname, '/front/dist')));
app.get('*', (req, res) => 
res.sendFile(path.join(__dirname, '/front/dist/index.html'))
)

app.use((err, req, res, next) => {
  res.status(500).send({message: err.message});
})

const port = process.env.PORT || 5000; 
app.listen(port, () => {
    console.log(`server at http://localhost:${port}`);
  });