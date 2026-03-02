
const { Pool } = require('pg');
require('dotenv').config();

async function test() {
    console.log('Testing connection to:', process.env.DATABASE_URL.replace(/:[^:@]+@/, ':****@'));
    const pool = new Pool({
        connectionString: process.env.DATABASE_URL,
        ssl: {
            rejectUnauthorized: false
        }
    });

    try {
        const res = await pool.query('SELECT NOW()');
        console.log('SUCCESS:', res.rows[0]);
    } catch (err) {
        console.error('FAILED:', err.message);
        if (err.stack) console.error(err.stack);
    } finally {
        await pool.end();
    }
}

test();
