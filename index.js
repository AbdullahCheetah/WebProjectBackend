const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.listen(3030, ()=>{console.log("Started at 3030")});
app.use(cors());
app.use(express.json());
mongoose.connect(process.env.MONGODB_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then (()=>{
    console.log("connected to db")
}).catch((err)=>{
    console.log(err)
})