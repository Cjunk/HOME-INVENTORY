const express = require('express');
const securedRouter = express.Router();
const db = require('../db/db.js'); // Adjust the path according to your file structure
const { login, authMiddleware, isAuthenticated } = require('./Authenticator.js');
/*
  all routes here are to be accessed via '/secure/'
  all routes MUST have isAuthenticated added to them
*/
securedRouter.use(isAuthenticated);
securedRouter.get('/getLoggedInInfo', (req, res) => {
  const userDetailsQuery = 'SELECT userID, user_first_name, user_email FROM users WHERE userID = ?';
  
  db.executeQuery(userDetailsQuery, [req.session.user.userID]).then(results => {
    console.log(results[0])
    res.status(200).json(results[0])
  }).catch(error => {
    console.error(error);
    res.status(444)
  });
  
  //res.status(200).json({data: "here is the data"});
});

module.exports = securedRouter;