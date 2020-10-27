const express = require('express');
const router = express.Router();
const dateControllers = require('../../controllers/dateControllers');

// Route for creating date (post)
router.route('/').post(dateControllers.newDate);

// Route for getting dates (GET)
router.route('/').get(dateControllers.getAllDates);

// Route for deleting date (Delete)
router.route('/:id').delete(dateControllers.deleteDate)


module.exports = router;
