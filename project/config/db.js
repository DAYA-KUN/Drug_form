
import mongoose from 'mongoose';

mongoose.set('strictQuery', false);

export const connectDB = async () => {
    mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => console.log("MongoDB connected"))
        .catch(err => console.log("MongoDB connection failed:", err));
};


