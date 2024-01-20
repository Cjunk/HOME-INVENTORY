require('dotenv').config();

// Function to check if a user is valid based on username and password
function isValidUser(username, password) {
    // Check username and password against your database or user store
    // Return true if valid, false otherwise
    if (username === process.env.TEST_USR && password === process.env.TEST_PWD) {
        return true;
    }
    return false;
}

// Middleware to handle user login
function login(req, res) {
    const { username, password } = req.body; // Assuming username and password are sent in the request body

    // Implement your authentication logic here (replace with actual logic)
    if (isValidUser(username, password)) {
        // Authentication successful
        // Initialize the user object in the session
        req.session.user = {
            username: process.env.TEST_USR,
            // Include any other user-related data
        };
        req.session.isAuthenticated = true;
        res.redirect('/test');
    } else {
        // Authentication failed
        req.session.isAuthenticated = false;
        res.redirect('/login');
    }
}
function isAuthenticated(req, res, next, callback) {
    if (req.session.isAuthenticated) {
        next(); // Continue if the user is authenticated
    } else {
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
