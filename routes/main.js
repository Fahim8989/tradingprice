const axios=require('axios');

module.exports = async function (app, priceData) {

    // General Routes
    app.get('/', function (req, res) {
        res.render('index.ejs', { ...priceData, user: req.user });
    });
    app.get('/about', function (req, res) {
        res.render('about.ejs', { ...priceData, user: req.user });
    });
}       
