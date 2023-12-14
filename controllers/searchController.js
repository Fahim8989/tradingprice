const userModel = require('../models/userModel');
const favoriteModel = require('../models/favoriteModel');

 async function showSearchInputPage(req, res, next) {
    const userId = req.user.userId; 
    const user = await userModel.getUserById(userId);
    res.render('searchInput.ejs', {user});
}

async function searchCoins(req, res, next) {
    const userId = req.user.userId; 
    const searchTerm = req.body.searchTerm || ''; 
    const user = await userModel.getUserById(userId);
    favoriteModel.searchCoins(userId, searchTerm, (error, searchResults) => {
        if (error) {
            console.error('Error searching coins:', error);
            return res.status(500).json({
                message: 'Error searching coins in the database',
                error: error.message
            });
        }
        
        // Render the search results in the searchResults.ejs page
        res.render('searchResults.ejs', { searchTerm: searchTerm, searchResults: searchResults, user });
    });
}

module.exports = {
    showSearchInputPage: showSearchInputPage,
    searchCoins: searchCoins
};
