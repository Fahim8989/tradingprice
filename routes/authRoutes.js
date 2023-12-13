const express = require('express');
const authController = require('../controllers/authController');
const router = express.Router();

router.get('/signup', (req, res) => {
    res.render('signup.ejs');
});

router.post('/signup', authController.signup);

router.get('/login', (req, res) => {
    res.render('login.ejs');
});

router.post('/login', authController.login);

module.exports = router;
