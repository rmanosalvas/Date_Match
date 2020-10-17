// Connect to the DB
const db = require('../models');
const isAuthenticated = require("../config/middleware/isAuthenticated.js");

module.exports = {
    // Create a new user
    createUser: (req, res) => {
		console.log("NEW USER")
		console.log(req)
		
		db.User.create(req.body).then(function(user) {
			res.json(user);
		});
	}



};