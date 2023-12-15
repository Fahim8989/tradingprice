// routes/addCustomCoinRoutes.js
const express = require('express');
const router = express.Router();
const authenticateToken = require('../middlewares/authMiddleware');
const customCoinController = require('../controllers/customCoinController');

router.use(authenticateToken);

// Render the "Add Custom Coin" page
router.get('/',authenticateToken,  customCoinController.renderAddCustomCoinPage);

// Handle the form submission
router.post('/',authenticateToken,  customCoinController.addCustomCoin);

module.exports = router;
