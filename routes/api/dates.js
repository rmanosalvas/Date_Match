const express = require('express');
const router = express.Router();
const dateControllers = require('../../controllers/dateControllers');



// route for creating date (post)
router.route('/').post(dateControllers.newDate);

// route for getting dates (GET)
router.route('/').get(dateControllers.getAllDates);

// route for deleting date (Delete)
router.route('/:id').delete(dateControllers.deleteDate)


module.exports = router;
