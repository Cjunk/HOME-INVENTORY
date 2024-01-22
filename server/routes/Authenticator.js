const bcrypt = require('bcrypt');
const db = require('../db/db'); // Adjust the path according to your file structure
const saltRounds = 10;
//const myPlaintextPassword = 'Quest35#';
require('dotenv').config();

// Function to check if a user is valid based on username and password
function isValidUser(username, password) {
    return new Promise((resolve, reject) => {
        // Query the database for the user's hashed password
        const sql = 'SELECT * FROM users WHERE user_username = ?;';
        db.executeQuery(sql, [username])
            .then(results => {
                if (results.length !== 0) {
                    // Compare the provided password with the stored hash
                    bcrypt.compare(password, results[0].user_hashed_pwd, (err, isMatched) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(isMatched); // true if passwords match, false otherwise
                        }
                    });
                } else {
                    console.log("function isValidUser: user not found");
                    resolve(false); // No user found
                }
            })
            .catch(err => {
                reject(err);
            });
    });
}

// Middleware to handle user login
function login(req, res) {
    const { username, password } = req.body;

    isValidUser(username, password).then(isValid => {
        if (isValid) {
            const userDetailsQuery = 'SELECT userID, user_first_name, user_email FROM users WHERE user_username = ?';
            db.executeQuery(userDetailsQuery, [username])
                .then(results => {
                    if (results.length > 0) {
                        // Authentication successful, initialize the user object in the session
                        req.session.user = {
                            userID: results[0].userID,
                            username: results[0].user_username,
                            firstName: results[0].user_first_name,
                            email: results[0].user_email
                        };
                        req.session.isAuthenticated = true;
                        console.log("function login: Password is VALID", req.session.isAuthenticated);
                        console.log(req.session.user);
                        res.redirect('/test');
                    } else {
                        // User not found (should not happen since isValidUser was true)
                        res.redirect('/login?error=usernotfound');
                    }
                })
                .catch(err => {
                    // Handle errors from userDetailsQuery
                    console.error("Database query error:", err);
                    res.status(500).send("Internal Server Error");
                });
        } else {
            // Authentication failed
            req.session.isAuthenticated = false;
            console.log("function login: NO !!! the USER is NOT VALID", req.session.isAuthenticated);
            res.redirect('/login?login=failed');
        }
    })
        .catch(err => {
            // Handle any errors that occurred during isValidUser
            console.error("Error in isValidUser:", err);
            req.session.isAuthenticated = false;
            res.status(500).send('Internal Server Error');
        });
};


function isAuthenticated(req, res, next) {
    if (req.session.isAuthenticated) {
        next(); // Continue if the user is authenticated
    } else {
        res.redirect('/login'); // Redirect to login if not authenticated
        //res.status(401).send('Unauthorized'); // Return 401 if not authenticated
    }
}
// Middleware for authentication checks
function authMiddleware(req, res, next) {
    // Your authentication logic here
    if (req.session.user.username !== process.env.TEST_USR) {
        return res.status(401).send('Access denied. No valid token provided.');
    }
    try {
        next();
    } catch (ex) {
        res.status(400).send('Invalid token.');
    }
}

module.exports = { login, authMiddleware, isAuthenticated };
