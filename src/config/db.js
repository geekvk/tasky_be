import mongoose from 'mongoose';
import {ENV} from './env.js';

export const connectDB = async() => {
    try{
        await mongoose.connect(ENV.MONGO_URI);
        console.log("Connected to the database successfully");
    }catch(error){
        console.log("Error connect to db");
        process.exit(1);
    }
}