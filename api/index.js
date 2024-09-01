import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose
.connect(process.env.DATABASE_URL)
.then(
    ()=>{console.log('MongoDB is connected');
})
.catch((error)=>{
    console.log(error);
});



const app = express();

app.listen(3000 , ()=>{
    console.log('server is running on port 3000')
});