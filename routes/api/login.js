const express = require('express');
const router = express.Router();
const userController = require('../../controllers/userControllers');
const passport = require("../../config/passport"); // Requiring passport

// route to log the user in 
router.route('/')
    .post(userController.loginUser)

module.exports = router;
