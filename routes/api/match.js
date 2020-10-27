const express = require('express');
const router = express.Router();
const matchController = require('../../controllers/matchControllers');

// Route for new matches
router.route('/').post(matchController.newMatch)


// Route for getting all matches for a given user
router.route('/').get(matchController.getMatches)

module.exports = router;
