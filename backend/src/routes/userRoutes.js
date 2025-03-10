import express from 'express';
import User from '../models/User.js';

const router = express.Router();

// Register new user
router.post('/register', async (req, res) => {
    try {
        const { username, email, password, address } = req.body;
        
        const user = await User.create(
            { username, email, password },
            address
        );
        
        res.status(201).json({
            message: 'User created successfully',
            user
        });
    } catch (error) {
        res.status(400).json({
            message: 'Error creating user',
            error: error.message
        });
    }
});

// Login
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.login(email, password);
        
        res.json({
            message: 'Login successful',
            user
        });
    } catch (error) {
        res.status(401).json({
            message: 'Login failed',
            error: error.message
        });
    }
});

// Delete user
router.delete('/:userId', async (req, res) => {
    try {
        const { userId } = req.params;
        await User.delete(userId);
        
        res.json({
            message: 'User deleted successfully'
        });
    } catch (error) {
        res.status(400).json({
            message: 'Error deleting user',
            error: error.message
        });
    }
});

export default router; 