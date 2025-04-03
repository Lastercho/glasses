import pool from '../config/database.js';

class Product {
    static async create(productData) {
        const { name, description, price, image_url, user_id } = productData;
        const result = await pool.query(
            'INSERT INTO products (name, description, price, image_url, user_id) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [name, description, price, image_url, user_id]
        );
        return result.rows[0];
    }

    static async update(productId, productData) {
        const { name, description, price, image_url } = productData;
        const result = await pool.query(
            'UPDATE products SET name = $1, description = $2, price = $3, image_url = $4, modified_at = CURRENT_TIMESTAMP WHERE id = $5 RETURNING *',
            [name, description, price, image_url, productId]
        );
        if (result.rows.length === 0) {
            throw new Error('Product not found');
        }
        return result.rows[0];
    }

    static async delete(productId) {
        const result = await pool.query(
            'UPDATE products SET deleted_at = CURRENT_TIMESTAMP WHERE id = $1 RETURNING *',
            [productId]
        );
        if (result.rows.length === 0) {
            throw new Error('Product not found');
        }
        return result.rows[0];
    }

    static async getAll(limit, offset, orderBy = "created_at DESC") {
        const result = await pool.query(
            `SELECT * FROM products WHERE deleted_at IS NULL ORDER BY ${orderBy} LIMIT $1 OFFSET $2`,
            [limit, offset]
        );
        return result.rows;
    }

    static async getTotalCount() {
        const result = await pool.query('SELECT COUNT(*) FROM products WHERE deleted_at IS NULL');
        return parseInt(result.rows[0].count, 10);
    }

    static async getById(productId) {
        const result = await pool.query('SELECT * FROM products WHERE id = $1', [productId]);
        if (result.rows.length === 0) {
            throw new Error('Product not found');
        }
        return result.rows[0];
    }
}

export default Product;
