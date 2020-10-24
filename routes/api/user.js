const express = require('express');
const router = express.Router();
const userController = require('../../controllers/userControllers');

// route for registering new user (post)
router.route('/').post(userController.createUser);

// //route to get a users info
// router.route('/:id').get(userController.getUser);

// // get users profile information
// router.route('/profile').get(userController.getUserProfile)

// route to get all users
router.route('/allUsers').get(userController.getAllUsers)

//route to get current user info    
// router.route('community').get(userController.getAllUsers);

// router.route('/recover')
//     .put(userController.recoverAccount);

module.exports = router;
