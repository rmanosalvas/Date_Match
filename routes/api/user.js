const express = require('express');
const router = express.Router();
const userController = require('../../controllers/userControllers');

// route for registering new user (post)
router.route('/')
    .post(userController.createUser);
    
module.exports = router;
