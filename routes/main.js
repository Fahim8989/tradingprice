const axios=require('axios');

module.exports = async function (app, priceData) {

    // General Routes
    app.get('/', function (req, res) {
        res.render('index.ejs', { ...priceData, user: req.user });
    });
    app.get('/about', function (req, res) {
        res.render('about.ejs', { ...priceData, user: req.user });
    });


    // //Private
    // app.get('/cryptorates', async (req, res) => {
    //     try {
    //         // Fetch cryptocurrency rates from CoinGecko API
    //         const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
    //             params: {
    //                 vs_currency: 'usd', // You can change the currency if needed
    //                 order: 'market_cap_desc',
    //                 per_page: 20,
    //                 page: 1,
    //                 sparkline: false,
    //             },
    //         });
    
    //         const cryptoRates = response.data;
    
    //         // Render CryptoRate.ejs with the fetched data
    //         res.render('cryptorate.ejs', { cryptoRates });
    //     } catch (error) {
    //         // console.error('Error fetching crypto rates:', error);
    //         res.status(500).send('Error fetching crypto rates OR API LIMIT REACHED');
    //     }
    // });

    // app.get('/search', function (req, res) {
    //     res.render("search.ejs", priceData);
    // });
   
}       
