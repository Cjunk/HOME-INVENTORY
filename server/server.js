const express = require('express');
const session = require('express-session');
const app = express();
const { login, authMiddleware, isAuthenticated } = require('./routes/Authenticator.js'); 
let NUMBER_OF_CONNECTIONS = 0
const SERVER_START_TIME = Date.now()
// Load environment variables from a .env file
require('dotenv').config();

// Configure session middleware for managing user sessions
app.use(session({
    secret: process.env.SECRET_KEY, // Replace with a secure secret key
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 3600000, // Session expires after 1 hour (in milliseconds)
        secure: false, // Set to true in a production environment if using HTTPS
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

    NUMBER_OF_CONNECTIONS = NUMBER_OF_CONNECTIONS + 1
    const isAuthenticated = req.session.user ? true : false;
    console.log("*************************************************************************************************");
    console.log(`* PATH:\t ${req.method}\t\t${req.url}\t\t\t\t\t\t\t\t\t*`);
    console.log(`* SERVER START:\t ${new Date(SERVER_START_TIME).toString()}\t\t*`);
    console.log(`* NUMBER OF CONNECTIONS DETECTED: ${NUMBER_OF_CONNECTIONS}\t\t\t\t\t\t\t\t*`);
    console.log(`* AUTHENTICATED USER: ${isAuthenticated ? 'Yes' : 'No'}\t\t\t\t\t\t\t\t\t*`);
    console.log("*************************************************************************************************");

    next()
});
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
/*
    ------------------------  THE ROUTES  ---------------------------------------------------------
*/
// Welcome message for the root route
app.get('/', (req, res) => {
    let f = isAuthenticated;
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>", f)
    res.sendFile(__dirname + '/public/login.html');
});
// Handle login requests
app.post('/login', login);

// Test route
app.get('/test', isAuthenticated, (req, res) => {
    res.status(200).send('You are accessing confidential content');
});

app.get('/logout', isAuthenticated,(req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error logging out');
        } else {
            res.send('Logged out successfully');
        }
    });
});

// Apply authentication middleware to routes that need protection
//app.use(authMiddleware);
// Start the server on the specified port or default to 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
