const db = require('../server/db/db.js'); // Adjust the path according to your file structure
function executeQuery(sql, values, callback) {
    db.get(sql, values, (err, results) => {
        
        if (err) {
            console.error('Error executing query:', err);
            callback(err, null);
        } else {
            console.log("no problem executing query")
            callback(null, results);
        }
    });
}


module.exports = { executeQuery };
