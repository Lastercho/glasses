import pool from '../config/database.js';

class Comment {
    constructor(userId, content) {
        this.userId = userId;
        this.content = content;
    }

    static async create(commentData) {
        const client = await pool.connect();
        try {
            const result = await client.query(
                'INSERT INTO comments (user_id, content) VALUES ($1, $2) RETURNING id, user_id, content, created_at',
                [commentData.userId, commentData.content]
            );
            return result.rows[0];
        } finally {
            client.release();
        }
    }

    static async update(commentId, content) {
        const client = await pool.connect();
        try {
            const result = await client.query(
                'UPDATE comments SET content = $1, modified_at = CURRENT_TIMESTAMP WHERE id = $2 RETURNING id, user_id, content, created_at, modified_at',
                [content, commentId]
            );
            if (result.rows.length === 0) {
                throw new Error('Comment not found');
            }
            return result.rows[0];
        } finally {
            client.release();
        }
    }

    static async delete(commentId) {
        const client = await pool.connect();
        try {
            const result = await client.query(
                'DELETE FROM comments WHERE id = $1 RETURNING id',
                [commentId]
            );
            if (result.rows.length === 0) {
                throw new Error('Comment not found');
            }
            return true;
        } finally {
            client.release();
        }
    }

    static async softDelete(commentId) {
        const client = await pool.connect();
        try {
            const result = await client.query(
                'UPDATE comments SET deleted_at = CURRENT_TIMESTAMP, modified_at = CURRENT_TIMESTAMP WHERE id = $1 RETURNING id, user_id, content, created_at, deleted_at, modified_at',
                [commentId]
            );
            if (result.rows.length === 0) {
                throw new Error('Comment not found');
            }
            return result.rows[0];
        } finally {
            client.release();
        }
    }

    static async getAll() {
        const client = await pool.connect();
        try {
            const result = await client.query('SELECT * FROM comments');
            return result.rows;
        } finally {
            client.release();
        }
    }
}

export default Comment;
