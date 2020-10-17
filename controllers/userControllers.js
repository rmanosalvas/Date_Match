// include the DB
const db = require('../models');

module.exports = {
    // Create a new user
    createNewUser: (req, res) => {
		db.User.create(req.body).then(function(user) {
			res.json(user);
		});
	},



};