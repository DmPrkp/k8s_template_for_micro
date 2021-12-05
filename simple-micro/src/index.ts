import mongoose from 'mongoose';
import { app } from './app'

const start = async () => {
  if(!process.env.JWT_KEY) {
    throw new Error('JWT_KEY must be defined')
  }

  if (!process.env.MONGO_URI) {
    throw new Error('MONGO_URI must be defined')
  } else {
    try {
      await mongoose.connect(process.env.MONGO_URI!); 
    } catch (e) {
      console.error(e)
    }
  }
}

app.listen(3000, () => {
  const info = 'Simple-micro on port 3000!!!'
  console.warn(info);
});

start();
