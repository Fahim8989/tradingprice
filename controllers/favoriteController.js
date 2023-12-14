// controllers/favoriteController.js
const favoriteModel = require('../models/favoriteModel');

async function favoriteCoin(req, res) {
    const userId = req.user.userId;
    const coinId = req.params.coinId;
    const coinSymbol = req.body.symbol; 
    const coinName = req.body.name; 
    const coinImage = req.body.image;
    try {
        // Check if the coin is already favorited by the user
        const existingFavorite = await favoriteModel.getFavoriteByUserIdAndCoinId(userId, coinId);

        if (existingFavorite) {
            res.status(200).send('Coin is already favorited by the user');
            return;
        }

        // The coin is not favorited, proceed to favorite
        await favoriteModel.favoriteCoin(userId, coinId, coinName, coinSymbol,coinImage);
        res.status(200).send('Coin favorited successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error favoriting coin');
    }
}

function removeFavorite(req, res, next) {
    const userId = req.user.userId;
    const coinId = req.params.coinId; 

    favoriteModel.removeFavoriteByCoinId(userId, coinId, (error, result) => {
        if (error) {
            console.error('Error removing favorite:', error);
            res.status(500).json({
                message: 'Error removing favorite from the database',
                error: error.message
            });
        } else {
            res.status(200).send('Favorite removed successfully');
        }
    });
}




function getFavorites(req, res, next) {
    const userId = req.user.userId;

    favoriteModel.getFavoritesByUserId(userId, (error, response) => {
        if (error) {
            console.error('Error retrieving favorites:', error);
            res.status(500).json({
                message: 'Error retrieving favorites from the database',
                error: error.message
            });
        } else {

            // res.status(200).json({
            //     message: 'Favorites retrieved successfully:',
            //     favorites: response
            // });
            res.render('favorites.ejs', { favoriteCoins:response });
        }
    });
}


module.exports = {
    favoriteCoin,
    getFavorites,
    removeFavorite,
};
