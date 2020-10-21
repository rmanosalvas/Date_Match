// Connect to the DB
const db = require('../models');
const notifier = require('../config/middleware/notifier');

module.exports = {
    // Route for creating new user
    createUser: (req, res) => {
		console.log("SERVER ACTION - createUser:")
		db.User.create(req.body).then(function(user) {
			res.json(user);
			// send welcome msg to the new user
			notifier("Welcome to Date Match " + req.body.first_name + ".", req.body.phone)
		});
	},
	accountSettings: (req, res) => {
		// change the users account settings
	},
	changeAvatar: (req, res) => {
		// change the users avatar
	},
	changePassword: (req, res) => {
		// change the users avatar
	},

 
}