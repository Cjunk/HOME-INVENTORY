/*
    The EXPRESS SERVER
    Written by Jericho Sharman 2024

*/

const dotenv = require('dotenv').config()
const express = require('express');
const cors = require('cors');
const session = require('express-session');
const app = express();
const HOST = '0.0.0.0'; // Bind to all IP addresses
const port = process.env.PORT || 3001;
const securedRoutes = require('./routes/securedRoutes');
const SERVER_START_TIME = Date.now()  // capture the servers start time :TODO
// ======================================================================================================================
const { login} = require('./routes/Authenticator.js');
const db = require('./db/db.js');
let NUMBER_OF_CONNECTIONS = 0 // This var is used to track the number of attempts to the API. TODO: ok to remove this in prod
//  CORS:
const corsOrigins = process.env.NODE_ENV === 'development' ? ['https://192.168.1.13:3002','http://192.168.1.13:3002', 'http://192.168.1.20:3002', 'http://192.168.1.23:3002', 'http://112.141.11.237:3002'] : ['http://192.168.1.13:3002', 'http://192.168.1.20:3002', 'http://192.168.1.23:3002', 'http://112.141.11.237:3002']

//  Get the allowed cors origins from the .env file
//const corsOrigins = process.env.NODE_ENV === 'development' ? process.env.CORS_ORIGINS_DEV.split(',') : process.env.CORS_ORIGINS_PROD.split(',');

const corsOptions = {
    origin: function (origin, callback) {
        if (corsOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            console.log(corsOrigins, origin)
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true, // Allow credentials (cookies) to be sent
};
app.use(cors(corsOptions));

//  Configure HTTPs
const https = require('https');
const fs = require('fs');
const path = require('path');
const { userInfo } = require('os');

//  Configure Mysql  TODO: Implement database access to store session info
const MySQLStore = require('express-mysql-session')(session);
const sessionStore = new MySQLStore({}, db); //TODO Keep this line in. eventually implement a database store 

// Configure session middleware for managing user sessions
app.use(session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: true,
    httpOnly: false, // Prevent JavaScript access to the cookie
    cookie: {
        maxAge: 36000000, // Session expires after 1 hour (in milliseconds)
        secure: true, // Set to true in a production environment if using HTTPS
        sameSite: 'none', // Required for cross-origin cookies        
    },
    //store: sessionStore
}));
// Middleware to parse JSON and URL-encoded data
app.use(express.json()); // For parsing application/json
app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded

// Serve static files from the 'public' directory
app.use(express.static('public'));
// Error handling middleware
function getDurationInMilliseconds(start) {
    const NS_PER_SEC = 1e9;
    const NS_TO_MS = 1e6;
    const diff = process.hrtime(start);
    return (diff[0] * NS_PER_SEC + diff[1]) / NS_TO_MS;
}
app.set('trust proxy', true); // Or a more specific configuration depending on your setup

app.use((req, res, next) => {
    const clientIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.socket.remoteAddress;
    const startTime = process.hrtime();
    if (process.env.NODE_ENV === 'development') {
        // Code that should only run in development
        NUMBER_OF_CONNECTIONS++
        res.on('finish', () => { // Log after response has been sent
            const durationInMilliseconds = getDurationInMilliseconds(startTime);
            console.log("*************************************************************************************************");
            console.log(`* TIMESTAMP:\t ${new Date().toISOString()}`);
            console.log(`* CONNECTIONS: ${NUMBER_OF_CONNECTIONS}`)
            console.log(`* METHOD:\t ${req.method}`);
            console.log(`* PATH:\t\t ${req.url}`);
            console.log(`* STATUS:\t ${res.statusCode}`);
            console.log(`* DURATION:\t ${durationInMilliseconds} ms`);
            console.log(`* USER IP:\t ${clientIp}`);
            console.log(`* USER AGENT:\t ${req.get('User-Agent')}`);
            console.log(`* Authenticated: ${req.session && req.session.isAuthenticated ? 'Yes' : 'No'}`)
            console.log("*************************************************************************************************");
        });
    }
    next();
});
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!',req.data,userInfo);
});

app.use('/secure', securedRoutes);
// Usage
/*
    PUBLIC ROUTES  ---------------------------------------------------------------------------------------------
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

/*

    SECURED ROUTES  --------------------------SECURED ROUTES------------------------SECURED ROUTES-------------------------------------------

*/

// Configure HTTPS server with the self-signed certificate
const httpsOptions = {
    key: fs.readFileSync(path.join(__dirname, 'server.key')),
    cert: fs.readFileSync(path.join(__dirname, 'server.cert'))
};

const server = https.createServer(httpsOptions, app);
server.listen(port, HOST, () => {
    console.log(`Server is running on port ${port}`);
});
