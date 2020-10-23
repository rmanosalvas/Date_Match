// Connect to the DB
const db = require('../models');
const notifier = require('../config/middleware/notifier');

module.exports = {
    // Route for creating new user
    createUser: (req, res) => {
		console.log("SERVER ACTION - createUser:")
		console.log(req.body)
		db.User.create(req.body).then(function(user) {
			res.json(user);
			// send welcome msg to the new user
			notifier("Welcome to Date Match " + req.body.first_name + ".", req.body.phone)
		}).catch((err) => {
			console.log(err)
		});;
	},
	getUser: (req, res) => {
		// get a users id
		console.log("SERVER ACTION - getting some users info:")
		console.log(req.body)
		db.User.findOne({
			where: {
			  id: req.params.id
			}
		}).then(function(userFound) {
			// Steps to take after the user
			console.log(userFound)
			res.json(user);
		  }).catch((err) => {
			  console.log(err)
		  });
	},
	getUsers:  (req, res) => {
		// get this users id
		console.log("SERVER ACTION - getting current user's info:")
		console.log(req.body)
		db.User.findOne({
			where: {
			  id: req.user.id
			}
		}).then(function(userFound) {
			// Steps to take after the user
			console.log(userFound)
			res.json(user);
		  }).catch((err) => {
			  console.log(err)
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
	accountSettings: (req, res) => {
		// change the users account settings
	},
	changePassword: (req, res) => {
		// change the users avatar
	},

 
}