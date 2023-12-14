const userModel = require('../models/userModel');
const axios=require('axios')

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

async function getCryptoRates(req, res) {
    try {
        // Fetch cryptocurrency rates from CoinGecko API
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
            params: {
                vs_currency: 'usd', // You can change the currency if needed
                order: 'market_cap_desc',
                per_page: 20,
                page: 1,
                sparkline: false,
            },
        });

        const cryptoRates = response.data;

        // Render CryptoRate.ejs with the fetched data
        res.render('cryptorate.ejs', { cryptoRates });
    } catch (error) {
        // console.error('Error fetching crypto rates:', error);
        res.status(500).send('Error fetching crypto rates OR API LIMIT REACHED');
    }
}

module.exports = {
    getUserDetails,
    getCryptoRates,
};
