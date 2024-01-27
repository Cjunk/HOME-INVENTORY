/*
    The Express server Authenticator: 2024
    Written by Jericho Sharman

    USAGE
    Called by every secured route
*/
const bcrypt = require('bcrypt');
const db = require('../db/db'); // Adjust the path according to your file structure
//const saltRounds = 10;  //  Required for BCRYPT for password hash creation
require('dotenv').config();

// Function to check if an attempted login username and password combination are in the database. Will check the password hashes
//  A username and password are required
function isValidUser(username, password) {
    return new Promise((resolve, reject) => {
        // Query the database for the user's hashed password
        const sql = 'SELECT * FROM users WHERE user_username = ?;';
        db.executeQuery(sql, [username])
            .then(results => {
                if (results.length !== 0) { // A users details have been found
                    // Compare the provided password with the stored hash
                    bcrypt.compare(password, results[0].user_hashed_pwd, (err, isMatched) => {
                        if (err) {
                            //  USER IS NOT AUTHENTICATED: DUE to invalid password
                            reject(err);
                        } else {
                            resolve(isMatched); // true if passwords match, false otherwise
                        }
                    });
                } else {
                    //  USER IS NOT AUTHENTICATED: Due to invalid username
                    console.log("function isValidUser: user not found");
                    resolve(false); // No user found
                }
            })
            .catch(err => {
                //  Not authenticated due to some other reason
                console.log("Athentication failed for some other reason")
                reject(err);
            });
    });
}
/*
    Main login function: Written by Jericho Sharman

*/
function login(req, res) {
    const { username, password } = req.body;
    isValidUser(username, password).then(isValid => {
        if (isValid) {
            const userDetailsQuery = 'SELECT userID, user_first_name, user_email FROM users WHERE user_username = ?';
            db.executeQuery(userDetailsQuery, [username])
                .then(results => {
                    if (results.length > 0) {
                        // Authentication successful, initialize the user object in the session
                        req.session.isAuthenticated = true;
                        req.session.user = {
                            userID: results[0].userID,
                            username: results[0].user_username,
                            firstName: results[0].user_first_name,
                            email: results[0].user_email,
                            isAuthenticated: true
                        };
                        //console.log("function login: Password is VALID", req.session.isAuthenticated);
                        //console.log("Session Cookie to be Set:", req.sessionID); //TODO DELETE ME
                        const userDetailsQuery = 'SELECT userID, user_first_name, user_email FROM users WHERE userID = ?'; // Get more user details now logged in

                        db.executeQuery(userDetailsQuery, [req.session.user.userID])
                            .then(results => {
                                console.log(results[0].user_first_name) // TODO DELETE ME
                            }).catch(error => {
                                console.error(error) // TODO DELETE ME
                            })

                        res.json({
                            message: 'Login successful',
                            success: true,
                        });

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
    req.sessionID = Object.keys(req.sessionStore.sessions)[0]
    console.log("HERE IS THE SESSION COOKIE", req.sessionID);
    if (req.session.isAuthenticated && req.sessionID) {
        next(); // Continue if the user is authenticated
    } else {
        //res.redirect('/login'); // Redirect to login if not authenticated
        res.status(401).send('Unauthorized'); // Return 401 if not authenticated
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
