import { connect } from 'mongoose';
import 'dotenv/config';

const connectDB = async () => {
    try {
        await connect("mongodb://root:1234@localhost:27017/");
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
        process.exit(1);
    }
};

export default connectDB;