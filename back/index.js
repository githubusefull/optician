import express  from "express";
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import appointRoute from './routes/appointment.js';
import contactRoute from './routes/contact.js';
import bodyParser from  'body-parser';
import  cors from  'cors';
import path from 'path'

dotenv.config();
const MONGO = process.env.MONGO || 'mongodb://localhost/myscript'
mongoose.set('strictQuery', true)
mongoose.connect(MONGO).then(() => {console.log('optician connected to mongodb')})
.catch(() => {console.log('optician error connected to mongodb')})
const app = express()
app.use(
    cors({
      credentials: true,
      origin: ['http://127.0.0.1:5173'],
    })
  )
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());


app.use("/api/optician", appointRoute)
app.use("/api/users", contactRoute)
const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, '/front/dist')));
app.get('*', (req, res) => 
res.sendFile(path.join(__dirname, '/front/dist/index.html')))


app.use((err, req, res, next) => {
  res.status(500).send({message: err.message});
})

const port = process.env.PORT || 5000; 
app.listen(port, () => {
    console.log(`server at http://localhost:${port}`);
  });