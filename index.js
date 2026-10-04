import express from 'express';
import mongoose from 'mongoose';
const app = express();
const router = express.Router();
import HomeRoute from './router/home.js';
import ApiRoute from './router/api.js';
import 'dotenv/config';


import connectDB from './libs/mongodb.js';

import User from './models/User.js';

connectDB();
//MongoDB Model



app.use((req,res,next)=>{
  console.log('Request received');
  //res.status(200).send('All Request same response received');
  // First it will execute this function middleware
  // Every request it performs this middleware very common for Logging 
  // Authentication
  next();


})

app.use("/home",HomeRoute);
app.use("/api",ApiRoute);
//Assign the router 


app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello Suriya')
})

app.get('/api',(req,res)=>{
  console.log('API called');
  res.send('API is Suriya working');
})

app.use((req,res,next)=>{
  res.status(404).send('Page not found');
})
//If not match any URL 

app.listen(3000, (req, res) => {
  console.log('Server is running on http://localhost:3000')
})