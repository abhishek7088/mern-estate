import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
dotenv.config();

mongoose.connect(process.env.MONGO).then(() =>{ console.log('Connected to MongoDB')})
  .catch((err) => console.error('Error connecting to MongoDB:', err));
  

const app = express();

app.listen(3000, () => {
  console.log('listening on the port 3000');
});
app.use(express.json());
app.use('/APi/user',userRouter);
app.use('/APi/auth',authRouter);
app.use((err,req,res,next)=>{
  const statusCode=err.statusCode||500;
  const message=err.message||"internal server error";
  return res.status(statusCode).json({
    success: true,
    statusCode,
    message,
  }); 
})