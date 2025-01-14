import express from "express";
import bodyParser from "body-parser";
import userRoutes from './routes/userRoutes.js';

const app = express();
const PORT = 3001;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', userRoutes);

app.listen(PORT, () => console.log(`Server running on https://margrosgames.vercel.app/${PORT}`));