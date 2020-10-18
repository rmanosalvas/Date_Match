// Connect to the DB
const db = require('../models');
const passport = require("../config/passport"); // Requiring passport
const isAuthenticated = require("../config/middleware/isAuthenticated.js");

module.exports = {
    // Route for creating new user
    createUser: (req, res) => {
		console.log("SERVER ACTION - createUser:")
		console.log(req)
		db.User.create(req.body).then(function(user) {
			res.json(user);
		});
	},

	loginUser: (req, res) => {
		console.log("SERVER ACTION - loginUser:")
		console.log(req)
		
	}
 
}



;