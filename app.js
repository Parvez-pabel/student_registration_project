import cors from 'cors';
import express from 'express';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import mongoose from 'mongoose';
import { DATABASE, PORT } from './app/config/config.js';
import router from './app/routes/studentRoutes.js';







const app = express();
//app use default mid
app.use(express.json());
app.use(cors());
app.use(helmet());

// rate limiter
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});
app.use(limiter);

//database connect
mongoose.connect(DATABASE, {autoIndex:true}).then(()=>{
  console.log("database connected");
  
}).catch(()=>{
  console.log("database connection failed");
  
 });
app.use("/api",router)

app.listen(PORT, ()=>{
  console.log(`Server running on port ${PORT}`);
 });

