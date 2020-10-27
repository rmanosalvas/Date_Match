const express = require('express');
const router = express.Router();
const userController = require('../../controllers/userControllers');

// Route for registering new user (post)
router.route('/').post(userController.createUser);

// Route to get all users
router.route('/allUsers').get(userController.getAllUsers)

module.exports = router;
