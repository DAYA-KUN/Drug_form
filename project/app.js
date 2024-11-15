
import express from 'express';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import drugRoutes from './routes/drugRoutes.js';

dotenv.config();
const app = express();

connectDB();

// Enable CORS for all routes
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());

app.use("/auth", authRoutes);
app.use("/api", drugRoutes);

app.use((req, res) => {
    res.status(404).json({ message: "Route not found" });
});

app.use((error, req, res, next) => {
    console.error("Server Error:", error.message);
    res.status(500).json({ message: "Internal server error", error: error.message });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
