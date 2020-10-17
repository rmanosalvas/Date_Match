//requiring in my controllers file that tells the route what to do
const router = require('express').Router();
// include controllers
const userController = require('../../controllers/userControllers');
const matchController =require('../../controllers/')
const dateController = require('../../controllers/dateControllers');
const msgControllers = require('../../controllers/msgControllers');


module.exports = router;
// //using router.route so when there is a /api/user/  it knows it is a post and the create function inside the userController file
// router.route('/').post(userController.createNewUser);

// *********************
// **** USER ROUTES ****
// *********************
// route to get user info (get)

// route for registering new user (post)
router.route('/api/signup').post(userController.createNewUser)
// route for changing user profile settings (put)

// route for changing user password (put)

// route for deleting user account (delete)

// *********************
// **** DATE ROUTES ****
// *********************
// route to get date info (get)

// route for creating new date (post)

// route to comment on date (put/post)

// route to delete date (delete)


// *********************
// **** MSG ROUTES ****
// *********************






// route for adding comments to date


