// routes/favoriteRoutes.js
const express = require('express');
const authenticateToken = require('../middlewares/authMiddleware');
const favoriteController = require('../controllers/favoriteController');
const router = express.Router();

// Apply middleware to check if the user is authenticated before accessing  routes
router.use(authenticateToken);

// Route to handle favoriting a coin
router.post('/favorite/:coinId',authenticateToken, favoriteController.favoriteCoin);

// Route to handle unfollowing a coin
router.post('/unfavorite/:coinId',authenticateToken, favoriteController.removeFavorite);

router.get('/', authenticateToken, favoriteController.getFavorites);
// Test route for fetching favorite coins


module.exports = router;
