// src/routes/userRoutes.js

const express = require('express');
const authenticateToken = require('../middlewares/authMiddleware');
const userController = require('../controllers/userController');
const { getCryptoRates } = require('../controllers/userController');
const router = express.Router();

router.get('/dashboard', authenticateToken, userController.getUserDetails);

router.get('/cryptorates', authenticateToken, getCryptoRates);
// router.post('/fav/:coinId', (req, res) => {
//     res.status(200).send('Test Route - Add to Favorite Clicked');
// });

router.get('/logout', (req, res) => {
    req.session.destroy();
    res.clearCookie('token');
    res.redirect('/');
});



module.exports = router;
