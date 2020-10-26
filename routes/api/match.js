const express = require('express');
const router = express.Router();
const matchController = require('../../controllers/matchControllers');

// route for new matches
router.route('/').post(matchController.newMatch)


// route for getting all matches for a given user
router.route('/').get(matchController.getMatches)

module.exports = router;
