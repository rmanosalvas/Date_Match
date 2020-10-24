const express = require('express');
const router = express.Router();
const userController = require('../../controllers/userControllers');

// get all users in community

router.route('/').get(userController.getUserCommunity);

module.exports = router;
