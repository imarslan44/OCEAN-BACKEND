import mongoose from 'mongoose';
import { MONGODB_URI } from './env.config.js';


export const connectDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI);

        
    
        const db = mongoose.connection;
        if (db.readyState === 1) {
            console.log('Connected to MongoDB');
        }else{
            console.error('Failed to connect to MongoDB');
        }
    } catch (error) {
        console.error('Error connecting to MongoDB:', error); 
        process.exit(1); // Exit the process with failure  
    }
}
