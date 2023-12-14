const express = require('express');
const router = express.Router();
const authenticateToken = require('../middlewares/authMiddleware');
const searchController = require('../controllers/searchController');

// Route for showing the search input page
router.get('/', authenticateToken,searchController.showSearchInputPage);

// Route for handling search POST requests and rendering results
router.post('/',authenticateToken, searchController.searchCoins);


module.exports = router;
