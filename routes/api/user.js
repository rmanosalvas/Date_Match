const express = require('express');
const router = express.Router();
const userController = require('../../controllers/userControllers');

// route for registering new user (post)
router.route('/').post(userController.createUser);

//route to get a users info
router.route('/:id').get(userController.getUser);

//route to get current user info    
router.route('s/').get(userController.getUsers);

// router.route('/recover')
//     .put(userController.recoverAccount);

module.exports = router;
