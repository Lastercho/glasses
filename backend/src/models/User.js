import pool from '../config/database.js';
import bcrypt from 'bcrypt';

class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    static async create(userData, addressData) {
        const client = await pool.connect();
        try {
            await client.query('BEGIN');
            
            // Create address first
            const addressResult = await client.query(
                'INSERT INTO addresses (street, city, country, postal_code) VALUES ($1, $2, $3, $4) RETURNING id',
                [addressData.street, addressData.city, addressData.country, addressData.postal_code]
            );

            const addressId = addressResult.rows[0].id;
            
            // Hash password
            const saltRounds = 10;
            const passwordHash = await bcrypt.hash(userData.password, saltRounds);

            // Create user
            const userResult = await client.query(
                'INSERT INTO users (username, email, password_hash, address_id) VALUES ($1, $2, $3, $4) RETURNING id, username, email',
                [userData.username, userData.email, passwordHash, addressId]
            );

            await client.query('COMMIT');
            return userResult.rows[0];
        } catch (error) {
            await client.query('ROLLBACK');
            throw error;
        } finally {
            client.release();
        }
    }

    static async login(email, password) {
        const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
        
        if (result.rows.length === 0) {
            throw new Error('User not found');
        }

        const user = result.rows[0];
        const isValid = await bcrypt.compare(password, user.password_hash);
        
        if (!isValid) {
            throw new Error('Invalid password');
        }

        return {
            id: user.id,
            username: user.username,
            email: user.email
        };
    }

    static async delete(userId) {
        const client = await pool.connect();
        try {
            await client.query('BEGIN');
            
            // Get address_id before deleting user
            const userResult = await client.query('SELECT address_id FROM users WHERE id = $1', [userId]);
            if (userResult.rows.length === 0) {
                throw new Error('User not found');
            }
            
            const addressId = userResult.rows[0].address_id;
            
            // Delete user
            await client.query('DELETE FROM users WHERE id = $1', [userId]);
            
            // Delete associated address
            if (addressId) {
                await client.query('DELETE FROM addresses WHERE id = $1', [addressId]);
            }

            await client.query('COMMIT');
            return true;
        } catch (error) {
            await client.query('ROLLBACK');
            throw error;
        } finally {
            client.release();
        }
    }
}

export default User; 