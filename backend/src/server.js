import express from 'express';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js';
import pool from './config/database.js';
import process from 'process';

const app = express();

app.use(cors());
app.use(express.json());

// Use user routes
app.use('/api/users', userRoutes);

export async function SetupApp() {
    try {
        await pool.connect();
        console.log('Connected to PostgreSQL database');
        
        app.listen(3000, () => {
            console.log('Server is running on port 3000');
        });
    } catch (error) {
        console.error('Error connecting to database:', error);
        process.exit(1);
    }
}

SetupApp(); 