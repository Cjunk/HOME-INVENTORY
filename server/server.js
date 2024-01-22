const express = require('express');
const cors = require('cors');
const session = require('express-session');
const app = express();
const { login, authMiddleware, isAuthenticated } = require('./routes/Authenticator.js');
const db = require('./db/db.js'); // Adjust the path according to your file structure

let NUMBER_OF_CONNECTIONS = 0
const SERVER_START_TIME = Date.now()
// Load environment variables from a .env file
require('dotenv').config();
app.use(cors());
// Configure session middleware for managing user sessions
app.use(session({
    secret: process.env.SECRET_KEY, // Replace with a secure secret key
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 3600000, // Session expires after 1 hour (in milliseconds)
        secure: process.env.NODE_ENV === "production", // Set to true in a production environment if using HTTPS
        httpOnly: true, // Session cookie is not accessible via JavaScript
    },
}));

// Middleware to parse JSON and URL-encoded data
app.use(express.json()); // For parsing application/json
app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded

// Serve static files from the 'public' directory
app.use(express.static('public'));
// Error handling middleware
app.use((req, res, next) => {
    NUMBER_OF_CONNECTIONS++
    console.log("*************************************************************************************************");
    console.log(`* PATH:\t ${req.method}\t\t${req.url}\t\t\t\t\t\t\t\t\t*`);
    console.log(`* SERVER START:\t ${new Date(SERVER_START_TIME).toString()}\t\t*`);
    console.log(`* NUMBER OF CONNECTIONS DETECTED: ${NUMBER_OF_CONNECTIONS}\t\t\t\t\t\t\t\t*`);
    console.log(`* AUTHENTICATED USER: ${req.session.user ? 'Yes' : 'No'}\t\t\t\t\t\t\t\t\t*`);
    console.log("*************************************************************************************************");

    next()
});
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
// Usage

/*
    ------------------------  THE ROUTES  ---------------------------------------------------------
*/
// Welcome message for the root route
app.get('/', (req, res) => {
    if (req.session.user) {  // If it is TRUE then this user is authenticated 
        res.redirect('/test');
    } else {
        res.sendFile(__dirname + '/public/login.html');
    }

});
app.get('/fetch-data', (req, res) => {
    db.query('SELECT * FROM item_master', (error, results, fields) => {
        if (error) throw error;
        res.json(results);
    });
});
// Handle login requests
app.post('/login', login);
app.get('/login', (req, res) => {
console.log("I am from the /app.get login")
})

// Test route
app.get('/test', isAuthenticated, (req, res) => {
    res.status(200).sendFile(__dirname + '/public/test.html');
});

app.get('/logout', isAuthenticated, (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error logging out');
        } else {
            res.sendFile(__dirname + '/public/login.html');;
        }
    });
});

// Apply authentication middleware to routes that need protection
//app.use(authMiddleware);
// Start the server on the specified port or default to 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}/`);
});
