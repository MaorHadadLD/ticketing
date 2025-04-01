import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

import { app } from './app';

  const start = async () => {
      if (!process.env.JWT_KEY) {
        throw new Error('JWT_KEY must be defined');
      }

        try {
        await mongoose.connect('mongodb://auth-mongo-srv:27017/auth');
        console.log('Connected to MongoDB');
        } catch (err) {
            console.log(err);
        }

        app.listen(3001, () => {
            console.log('Listening on port 3001!!!!!!!!');
         });
    };

    start();
 



