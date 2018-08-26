const express = require('express');
const app = express();
const axios = require("axios");
require('dotenv').load();

var key = process.env.giphy_key
var api = 'https://api.giphy.com/v1/gifs/search?';
var apikey = `&api_key=${key}`;
var query = "&q=toy+story&limit=3";




app.get('/', async (req, res) => {
	let {data} = await axios.get(api + apikey + query);
	res.send(data);
});


app.listen(5000, ()=> console.log("App listening on port 5000"));