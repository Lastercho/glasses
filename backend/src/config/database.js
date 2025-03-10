import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
    user: 'dev',
    host: 'localhost',
    database: 'glasses',
    password: '12345',
    port: 5432,
});

export default pool; 