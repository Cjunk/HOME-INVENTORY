const express = require('express');
const securedRouter = express.Router();
const db = require('../db/db.js'); // Adjust the path according to your file structure
const { isAuthenticated } = require('./Authenticator.js');
/*
  all routes here are to be accessed via '/secure/'

*/
securedRouter.use(isAuthenticated);

/*================================================= SOH related routes */
securedRouter.get('/inventory/soh', (req, res) => {
  //  Get inventory for the logged in use
  // filters: Category.
})
securedRouter.post('/inventory/inbound', (req, res) => {
  //  add stock
})
securedRouter.post('/inventory/outbound', (req, res) => {
  //  remove stock
})
/*================================================= MASTER LISTS related routes */
securedRouter.put('/inventory/masterItem/add', (req, res) => {
  //  Update pre existing item details
})
securedRouter.delete('/inventory/masterItem/update', (req, res) => {
  //  Update pre existing item details
})
securedRouter.delete('/inventory/masterItem/delete', (req, res) => {
  //  Update pre existing item details
})
securedRouter.delete('/inventory/masterlocation/add', (req, res) => {
  //  Update pre existing item details
})
securedRouter.delete('/inventory/masterlocation/update', (req, res) => {
  //  Update pre existing item details
})
securedRouter.delete('/inventory/masterlocation/delete', (req, res) => {
  //  Update pre existing item details
})

/*================================================= User related routes */
securedRouter.get('/userInfo', (req, res) => {
  const userDetailsQuery = 'SELECT user_username,user_first_name, user_last_name,user_email,user_mailing_list,user_last_login,user_type,user_status,user_creation_date FROM users WHERE userID = ? && user_status != ?';

  db.executeQuery(userDetailsQuery, [req.session.user.userID, 0]).then(results => {
    console.log(results[0])
    res.status(200).json(results[0])
  }).catch(error => {
    console.error(error);
    res.status(444)
  });

  //res.status(200).json({data: "here is the data"});
})
securedRouter.patch('/userInfo/edit', (req, res) => {
  //  Update user details

})

securedRouter.get('/getLoggedInInfo', (req, res) => {
  const userDetailsQuery = `SELECT userID,user_username,user_first_name, user_last_name,user_email,user_mailing_list,user_last_login,user_type,user_status FROM users WHERE userID = ?`;

  db.executeQuery(userDetailsQuery, [req.session.user.userID, 1]).then(results => {

    console.log(results[0])
    res.status(200).json(results[0])
  }).catch(error => {
    console.error(error);
    res.status(444)
  });

  //res.status(200).json({data: "here is the data"});
});

module.exports = securedRouter;