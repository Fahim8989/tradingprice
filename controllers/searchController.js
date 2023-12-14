// searchController.js

const favoriteModel = require('../models/favoriteModel');

function showSearchInputPage(req, res, next) {
    res.render('searchInput.ejs');
}

function searchCoins(req, res, next) {
    const userId = req.user.userId; 
    const searchTerm = req.body.searchTerm || ''; 

    favoriteModel.searchCoins(userId, searchTerm, (error, searchResults) => {
        if (error) {
            console.error('Error searching coins:', error);
            return res.status(500).json({
                message: 'Error searching coins in the database',
                error: error.message
            });
        }

        // Render the search results in the searchResults.ejs page
        res.render('searchResults.ejs', { searchTerm: searchTerm, searchResults: searchResults });
    });
}

module.exports = {
    showSearchInputPage: showSearchInputPage,
    searchCoins: searchCoins
};
