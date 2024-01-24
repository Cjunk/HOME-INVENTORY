const mysql = require('mysql')
require('dotenv').config();

const db = mysql.createConnection({
    connectionLimit: 2, // Adjust this value as needed
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
/**
 * Executes a SQL query with the provided SQL string and values.
 * @param {string} sql - The SQL query string.
 * @param {Array} values - Array of values for the query placeholders.
 * @returns {Promise} - A Promise that resolves to the query results.
 */
function executeQuery(sql, values) {
    return new Promise((resolve, reject) => {
        
        db.query(sql, values, (err, results) => {
            if (err) {
                reject(err);
            } else {    
            
                resolve(results);
            }
        });
    });
}

module.exports = { db, executeQuery };