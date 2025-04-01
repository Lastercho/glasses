/* eslint-disable no-undef */
import express from 'express';
import jwt from 'jsonwebtoken';
import Product from '../models/Product.js';

const router = express.Router();

// Middleware to authenticate user
function authenticateToken(req, res, next) {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) return res.sendStatus(401);

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
}

// Create a new product
router.post('/create', authenticateToken, async (req, res) => {
    try {
        const product = await Product.create({ ...req.body, user_id: req.user.id }); // Ensure `user_id` is passed
        res.status(201).json({ message: 'Product created successfully', product });
    } catch (error) {
        res.status(400).json({ message: 'Error creating product', error: error.message });
    }
});

// Update an existing product
router.put('/:productId', authenticateToken, async (req, res) => {
    try {
        const product = await Product.getById(req.params.productId);
        if (product.user_id !== req.user.id) return res.sendStatus(403);

        const updatedProduct = await Product.update(req.params.productId, req.body);
        res.json({ message: 'Product updated successfully', product: updatedProduct });
    } catch (error) {
        res.status(400).json({ message: 'Error updating product', error: error.message });
    }
});

// Delete a product
router.delete('/:productId', authenticateToken, async (req, res) => {
    try {
        const product = await Product.getById(req.params.productId);
        if (product.user_id !== req.user.id) return res.sendStatus(403);

        const deletedProduct = await Product.delete(req.params.productId);
        res.json({ message: 'Product deleted successfully', product: deletedProduct });
    } catch (error) {
        res.status(400).json({ message: 'Error deleting product', error: error.message });
    }
});

// Get all products with pagination
router.get('/', async (req, res) => {
    const { page = 1, limit = 5 } = req.query;
    const offset = (page - 1) * limit;

    try {
        const products = await Product.getAll(limit, offset);
        const totalProducts = await Product.getTotalCount();

        res.json({
            products,
            totalProducts,
            totalPages: Math.ceil(totalProducts / limit),
            currentPage: page
        });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching products', error: error.message });
    }
});

export default router;
