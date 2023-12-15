const express = require('express');
const router = express.Router();
const weeklyPricesController = require('../controllers/weeklyPricesController');
const authenticateToken = require('../middlewares/authMiddleware');


// Route to render the form
router.get('/', authenticateToken,weeklyPricesController.renderForm);

// Route to handle the form submission
router.post('/',authenticateToken, weeklyPricesController.getWeeklyPrices);

module.exports = router;
