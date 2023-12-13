const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');

const JWT_SECRET=process.env.JWT_SECRET_KEY;

async function signup(req, res) {
    const { username, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        await userModel.createUser(username, email, hashedPassword);
        res.redirect('/auth/login');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error creating user');
    }
}


async function login(req, res) {
    const { username, password } = req.body;

    try {
        const results = await userModel.getUserByUsername(username);

        if (results.length === 0) {
            res.status(401).send('Invalid username or password');
            return;
        }

        const user = results[0];
        const match = await bcrypt.compare(password, user.password);

        if (match) {
            const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1h' });
            req.session.userId = user.id;
            res.cookie('token', token, { httpOnly: true, maxAge: 3600000 }); // 1 hour expiration
            res.redirect('/user/dashboard');
        } else {
            res.status(401).send('Invalid username or password');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error during login');
    }
}

module.exports = {
    signup,
    login,
};
