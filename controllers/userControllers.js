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
	getOneUser: (req, res) => {
		// get a users id
		console.log("SERVER ACTION - getting some users info by ID")
		db.User.findOne({
			where: {
			  id: req.params.id
			}
		}).then(function(userFound) {
			// Steps to take after the user
			// console.log(userFound)
			res.json(user);
		  }).catch((err) => {
			  console.log(err)
		  });
	},
	getUserProfile:  (req, res) => {
		// get this users id
		console.log("SERVER ACTION - getting current user's info:")
		db.User.findOne({
			where: {
			  id: req.user.id
			}
		}).then(function(userFound) {
			// Steps to take after the user is found
			res.json(userFound);
		  }).catch((err) => {
			  console.log(err)
		  });
	},
	getUserCommunity: (req, res) => {
		let genders = []
		if (req.user.orientation == "Straight" && req.user.gender !== "Other") {
			genders.push("Woman")
			console.log("Finding  " + genders +"s for a " + req.user.orientation + " " + req.user.gender)
		} else if (req.user.orientation == "Gay" && req.user.gender == "Woman") {
			genders.push("Woman")
			console.log("Finding  " + genders +"s for a " + req.user.orientation + " " + req.user.gender)
		} else if (req.user.orientation == "Gay" && req.user.gender == "Man") {
			genders.push("Man")
			console.log("Finding  " + genders +"s for a " + req.user.orientation + " " + req.user.gender)
		} else if (req.user.orientation == "Straight" && req.user.gender == "Other") {
			genders.push("Other")
			genders.push("Man")
			genders.push("Woman")
			console.log("Finding  " + genders +"s for a " + req.user.orientation + " " + req.user.gender)
		} else if (req.user.orientation == "Bisexual" && req.user.gender !== "Other") {
			genders.push("Man")
			genders.push("Woman")
			console.log("Finding  " + genders +"s for a " + req.user.orientation + " " + req.user.gender)
		}
			db.User.findAll({
				where: { gender: genders},
				order: [
				['createdAt', 'DESC']
				],
			}).then(function(result) {
				res.json(result)
			}).catch((err) => {
				console.log(err)
			});

	},
	getAllUsers: (req, res) => {
		console.log("Getting all users from the DB")
			db.User.findAll({
			}).then(function(result) {
				res.json(result)
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