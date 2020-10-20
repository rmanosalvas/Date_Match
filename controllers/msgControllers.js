// Connect to the DB
const db = require('../models');
const isAuthenticated = require("../config/middleware/isAuthenticated.js");

module.exports = {
    // Route for creating new user
    sendMsg: (req, res) => {
		console.log("SERVER ACTION - sending msg:");
		db.Messages.create(req.body).then(function(user) {
			res.json(user);
		});
	},
	deleteMsg: (req, res) => {
        console.log("SERVER ACTION - deleting msg:");
        
	}
 
}