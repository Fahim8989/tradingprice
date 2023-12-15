// Import the modules we need
var express = require ('express')
const session = require('express-session');
var ejs = require('ejs')
var bodyParser= require ('body-parser')
const cors = require("cors");
const dotenv =require('dotenv');
dotenv.config();

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const axios = require('axios');

// Create the express application object
const mysql = require('mysql');
const db = require('./configs/db');
const app = express()

const  PORT= process.env.PORT || 3301
const JWT_SECRET=process.env.JWT_SECRET_KEY


app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(session({ secret: JWT_SECRET, resave: true, saveUninitialized: true }));

// Connect to DB 
db;

// const authenticateToken = require('./middlewares/authMiddleware');
// app.use(authenticateToken);

const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const favoriteRoutes = require('./routes/favoriteRoutes');
const searchRoutes = require('./routes/searchRoutes');
const addCustomCoinRoutes = require('./routes/addCustomCoinRoutes');
const weeklyRoutes = require('./routes/weeklyRoutes');

app.use('/auth', authRoutes);
app.use('/user', userRoutes);
app.use('/favorites', favoriteRoutes);
app.use('/search', searchRoutes);
app.use('/addcustomcoin', addCustomCoinRoutes);
app.use('/weeklyprices', weeklyRoutes);
// Set up css


app.use(express.static(__dirname + '/public'));

// Set the directory where Express will pick up HTML files
// __dirname will get the current directory
app.set('views', __dirname + '/views');

// Tell Express that we want to use EJS as the templating engine
app.set('view engine', 'ejs');

// Tells Express how we should process html files
// We want to use EJS's rendering engine
app.engine('html', ejs.renderFile);

// Define our data
var priceData = {siteName: "Trading Pricer"}

// Requires the main.js file inside the routes folder passing in the Express app and data as arguments.  All the routes will go in this file
require("./routes/main")(app, priceData);

// Start the web app listening
app.listen(PORT, () => console.log(`App listening on port ${PORT}!`))
//ssh -t mahme006@doc.gold.ac.uk myserver ssh 443

//api
// const url = 'https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '41ef405466msh963b53c61d1e5b4p1996c8jsn17b1a35d99c4',
// 		'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
// 	}
// };
// const URL = 'https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0'
// 	fetch(URL, options)
// .then(response => response.json())
// .then(response => console.log(response))
// .catch(err => console.error(err));
