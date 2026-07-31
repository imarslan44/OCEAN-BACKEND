import mongoose from 'mongoose';
import { MONGODB_URI } from './env.config.js';

export const connectDB = async () => {
    try {
        mongoose.connection.on('disconnected', () => {
            console.warn('MongoDB disconnected. Retrying connection...');
        });

        mongoose.connection.on('error', (err) => {
            console.error('MongoDB connection error:', err);
        });

        await mongoose.connect(MONGODB_URI, {
            maxPoolSize: 10,
            serverSelectionTimeoutMS: 5000,
            socketTimeoutMS: 45000,
        });

        console.log('Successfully connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error); 
        process.exit(1);
    }
};
