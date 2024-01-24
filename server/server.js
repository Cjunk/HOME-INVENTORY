const dotenv = require('dotenv').config()
const express = require('express');
const cors = require('cors');
const session = require('express-session');
const app = express();

const { login, authMiddleware, isAuthenticated } = require('./routes/Authenticator.js');
const db = require('./db/db.js'); // Adjust the path according to your file structure
const allowedOrigins = [{
    origin:'*',
     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
}]; // Adjust as needed
const https = require('https');
const fs = require('fs');
const path = require('path');
const MySQLStore = require('express-mysql-session')(session);

// Configure session middleware for managing user sessions
const sessionStore = new MySQLStore({}, db);
console.log('Session store created:')
const HOST = '0.0.0.0'; // Bind to all IP addresses
const port = process.env.PORT || 3001;
let NUMBER_OF_CONNECTIONS = 0
const SERVER_START_TIME = Date.now()

const corsOptions = {
    origin: allowedOrigins, // Add the origin of your React app here
    credentials: true, // Allow credentials (cookies) to be sent
};

// Configure session middleware for managing user sessions
app.use(session({
    secret: process.env.SECRET_KEY, // Replace with a secure secret key
    resave: false,
    saveUninitialized: true,
    httpOnly: true, // Prevent JavaScript access to the cookie
    
    cookie: {
        maxAge: 36000000, // Session expires after 1 hour (in milliseconds)
        secure: true, // Set to true in a production environment if using HTTPS
        sameSite: 'none', // Required for cross-origin cookies        
        maxAge: 3600000, // 1 hour (in milliseconds) }, // Set secure to true for TTPS
    },
    //store: sessionStore
}));

app.use(cors(corsOptions));
// Middleware to parse JSON and URL-encoded data
app.use(express.json()); // For parsing application/json
app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded

// Serve static files from the 'public' directory
app.use(express.static('public'));
// Error handling middleware
app.use((req, res, next) => {
    NUMBER_OF_CONNECTIONS++
    const hostHeader = req.headers['host'];
    const hostParts = hostHeader.split(':');
    const userIP = hostParts[0]; // This will contain the IP address
    console.log("*************************************************************************************************");
    console.log(`* PATH:\t ${req.method}\t\t${req.url}\t\t\t\t\t\t\t\t\t*`);
    console.log(`* SERVER START:\t ${new Date(SERVER_START_TIME).toString()}\t\t*`);
    console.log(`* NUMBER OF CONNECTIONS DETECTED: ${NUMBER_OF_CONNECTIONS}\t\t\t\t\t\t\t\t*`);
    console.log(`* USER IP: ${userIP}\t\t\t\t\t\t\t\t\t\t\t\t\t*`);
    console.log(`* AUTHENTICATED USER: ${req.session.isAuthenticated ? 'Yes' : 'No'}\t\t\t\t\t\t\t\t\t*`);
    console.log("*************************************************************************************************");
    //console.log(req)
    next()
});
//app.use(authMiddleware);
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
    db.executeQuery('SELECT * FROM item_master', (error, results, fields) => {
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
    const userDetailsQuery = 'SELECT userID, user_first_name, user_email FROM users WHERE userID = ?';
    db.executeQuery(userDetailsQuery, [req.session.userID])
    res.status(222).sendFile(__dirname + '/public/test.html');
});

app.post('/logout', (req, res, next) => {
    req.session.destroy((err) => {
        if (err) {
            res.status(500).json({ success: false, message: 'Session could not be destroyed' })
        } else {
            //console.log("SUCCESSFUL LOGOUT")
            res.json({ success: true, message: 'Logout successfull' })
        }
    });
});

// Apply authentication middleware to routes that need protection

// Configure HTTPS server with the self-signed certificate
const httpsOptions = {
    key: fs.readFileSync(path.join(__dirname, 'server.key')),
    cert: fs.readFileSync(path.join(__dirname, 'server.cert'))
};

const server = https.createServer(httpsOptions, app);
server.listen(port, HOST, () => {
    console.log(`Server is running on port ${port}`);
});
