import mongoose from 'mongoose';
import { MONGODB_URI } from './env.config.js';

let connectionPromise = null;
let listenersRegistered = false;

export const connectDB = async () => {
    if (mongoose.connection.readyState === 1) {
        return mongoose.connection;
    }

    if (connectionPromise) {
        return connectionPromise;
    }

    if (!listenersRegistered) {
        mongoose.connection.on('disconnected', () => {
            console.warn('MongoDB disconnected. A later request will retry the connection.');
        });

        mongoose.connection.on('error', (err) => {
            console.error('MongoDB connection error:', err);
        });

        listenersRegistered = true;
    }

    try {
        connectionPromise = mongoose.connect(MONGODB_URI, {
            maxPoolSize: 10,
            serverSelectionTimeoutMS: 5000,
            socketTimeoutMS: 45000,
        });

        await connectionPromise;
        console.log('Successfully connected to MongoDB');
        return mongoose.connection;
    } catch (error) {
        connectionPromise = null;
        console.error('Error connecting to MongoDB:', error); 
        throw error;
    }
};
