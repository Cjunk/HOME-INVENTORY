const mysql = require('mysql')
require('dotenv').config();

const db = mysql.createConnection({
    host: process.env.DB_HOST, // Replace with correct host ip
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});
/*DATABASE CONNECTOR*/
db.connect(err => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL');
});