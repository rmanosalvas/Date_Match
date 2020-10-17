
//requiring in my controllers file that tells the route what to do
const router = require('express').Router();
const userController = require('../../controllers/userControllers');


// route for registering new user (post)
router.route('/')
    .post(userController.createUser)


module.exports = router;
