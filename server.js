const express = require('express');
const app = express();
const axios = require("axios");
require('dotenv').load();
var router = express.Router();

var key = process.env.giphy_key
var api = 'https://api.giphy.com/v1/gifs/search?';
var apikey = `&api_key=${key}`;
// var query = "&q=toy+story&limit=3";


app.get('/api/:title', async (req, res) => {
	console.log('requesting' + req.params.title);
	let movie_url = api + apikey + `&q=${req.params.title}&limit=3`
	console.log(movie_url);
	let {data} = await axios.get(movie_url).catch((err)=>console.log(err));
	console.log(data);
	res.send(data);

});



app.listen(5000, ()=> console.log("App listening on port 5000"));
