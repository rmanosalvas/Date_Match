// Connect to the DB
const db = require('../models');
const notifier = require('../config/middleware/notifier');
const generatePassword = require('password-generator');
const toButcketFS = require("../config/middleware/toButcketFS.js");
const multer  = require('multer')
const storage = multer.memoryStorage()
const bcrypt = require("bcryptjs");
const AWS_BUCKET_PUB = process.env.AWS_PUBLIC_URL

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
			res.json(userFound);
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
	updateProfile: (req, res) => {
		console.log("user controller HIT!!!!!!!!!!!!!!!!!!!!")
		// change the users profile settings
		console.log(req)
		db.User.update(
			{
				gender: req.body.gender,
				aboutMe1: req.body.aboutMe1,
				aboutMe2: req.body.aboutMe2,
				aboutMe3: req.body.aboutMe3,
				userPref1: req.body.userPref1,
				userPref2: req.body.userPref2,
				userPref3: req.body.userPref3,
			},{ where : { id: req.body.id}},
		  ).then(function (result) {
			  console.log(result)
			res.json(result);
		})
	},
	changeAvatar: (req, res) => {
		console.log(req)
		console.log("SERVER SIDE - Changing User profile picture")
		console.log(req.file)
		toButcketFS((req.file.buffer), (req.file.originalname))
		// change the avatar in the db (PUT)
		db.User.update(
		  {
			avatar: "https://bucketeer-6c0bca0c-8c17-4a2e-a0c9-6c23c9400d69.s3.amazonaws.com/public/"+req.file.originalname
		  },{ where : { id: req.user.id}},
		  ).then(function (result) {
			notifier("Nice a new photo! Now get out there and find some new dates!", req.user.phone) ;
			res.json(result);
		})
		
	},
	changeUserPassword: (req, res) => {
		console.log(req)
		// find the current users information
		db.User.findOne({
            where: {
				id: req.user.id,
            }
        }).then(function (dbUser) {
			console.log("user found")
			console.log(dbUser)
            // If there's no user with the given email
            if (!dbUser) {
				res.status(500).send('500 - the user was not logged in, nothing to change');	
            }// If there is a user with the given email, but the password the user gives us is incorrect
            else {
				var salt = bcrypt.genSaltSync(10);
				newpw = bcrypt.hashSync(req.body.password, salt);
				// change the users password and text it to them
				db.User.update(
					{
						password: newpw
					},{ where : { id: dbUser.id}},
				  ).then(function (result) {
					  notifier("Someone just changed your password on Date_Match. If this wasn't you should consider securing your account", dbUser.phone) ;
					  res.json(result);
					  res.status(200).send('200 - the password and email match change your password');
				})
            
			}
            
        });
	},
	recoverAccount: (req, res) => {
		console.log(req)
		db.User.findOne({
            where: {
				email: req.body.email,
				phone: req.body.phone
            }
        }).then(function (dbUser) {
			console.log("dataFound!!!!!")
			console.log(dbUser)
            // If there's no user with the given email
            if (!dbUser) {
				res.status(500).send('500 - incorrect info');	
            }
            // If there is a user with the given email, but the password the user gives us is incorrect
            else if (!dbUser.validPassword(dbUser.password)) {
				var salt = bcrypt.genSaltSync(10);
				// make new pw for the user
				pwraw = generatePassword()
				newpw = bcrypt.hashSync(pwraw, salt);
				// change the users password and text it to them
				db.User.update(
					{
						password: newpw
					},{ where : { id: dbUser.id}},
				  ).then(function (result) {
					  notifier("Hey, "+dbUser.first_name+" your new password is:   " + pwraw, dbUser.phone) ;
					  res.json(result);
					  res.status(200).send('200 - the password and email match change your password');
				})
            }
          
            
        });

		// check if the request contains a vaild email and password

		// change the users password

		
		
	},
	getComments: (req, res) => {
		db.Comments.findAll({
			where: {
				owningPost: res.params.id
			},
			order: [
				['createdAt', 'DESC']
				],

		}).then(function(result) {
			res.json(result)
		}).catch((err) => {
			console.log(err)
		});
	},
	postComment: (req, res) => {
	
	},

 
}