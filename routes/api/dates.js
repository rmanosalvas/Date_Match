const express = require('express');
const router = express.Router();
const dateControllers = require('../../controllers/dateControllers');

// route for registering new user (post)
router.route('/')
    .post(dateControllers.newDate);


module.exports = router;
