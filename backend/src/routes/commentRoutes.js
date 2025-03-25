import express from 'express';
import Comment from '../models/Comment.js';
import pool from '../config/database.js';

const router = express.Router();

// Create a new comment
router.post('/create', async (req, res) => {
    try {
        const commentData = req.body;
        const comment = await Comment.create(commentData);
        res.status(201).json({
            message: 'Comment created successfully',
            comment
        });
    } catch (error) {
        res.status(400).json({
            message: 'Error creating comment',
            error: error.message
        });
    }
});

// Update an existing comment
router.put('/:commentId', async (req, res) => {
    try {
        const { commentId } = req.params;
        const { content } = req.body;
        const updatedComment = await Comment.update(commentId, content);
        res.json({
            message: 'Comment updated successfully',
            updatedComment
        });
    } catch (error) {
        res.status(400).json({
            message: 'Error updating comment',
            error: error.message
        });
    }
});

// Delete a comment
router.delete('/:commentId', async (req, res) => {
    try {
        const { commentId } = req.params;
        const updatedComment = await Comment.softDelete(commentId);
        res.json({
            message: 'Comment deleted successfully',
            updatedComment
        });
    } catch (error) {
        res.status(400).json({
            message: 'Error deleting comment',
            error: error.message
        });
    }
});

// Get all comments with pagination
router.get('/', async (req, res) => {
    const { page = 1, limit = 5 } = req.query;
    const offset = (page - 1) * limit;

    try {
        const result = await pool.query(`
            SELECT comments.*, users.username AS username 
            FROM comments 
            JOIN users ON comments.user_id = users.id 
            WHERE comments.deleted_at IS NULL
            ORDER BY 
                COALESCE(comments.modified_at, comments.created_at) DESC
            LIMIT $1 OFFSET $2
        `, [limit, offset]);
        const totalResult = await pool.query('SELECT COUNT(*) FROM comments WHERE deleted_at IS NULL');
        const totalComments = totalResult.rows[0].count;

        res.json({
            comments: result.rows,
            totalComments,
            totalPages: Math.ceil(totalComments / limit),
            currentPage: page
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error fetching comments',
            error: error.message
        });
    }
});

export default router;