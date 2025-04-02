/* eslint-disable no-undef */
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';


dotenv.config();

export default function createToken(user) {
    const payload = { id: user.id, email: user.email };
    const secretKey = process.env.JWT_SECRET;
    const options = { expiresIn: '24h' };
    const token = jwt.sign(payload, secretKey, options);
    return token;
}