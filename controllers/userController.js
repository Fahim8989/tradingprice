const userModel = require('../models/userModel');

async function getUserDetails(req, res) {
    const userId = req.user.userId; // assuming you store user information in the JWT payload

    try {
        const user = await userModel.getUserById(userId);
        res.render('dashboard.ejs', { user });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving user details');
    }
}

module.exports = {
    getUserDetails,
};
