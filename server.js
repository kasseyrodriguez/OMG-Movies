const express = require('express');
const app = express();
const axios = require("axios");

app.get('/', (req, res) => res.send("Hello!"));

var api = 'https://api.giphy.com/v1/gifs/search?';
var apikey = "&api_key=zBgx2F4PBeszRUFVWpmuY6EDmaRQgdVA";
var query = "&q=rainbow";

axios.get(api + apikey + query)
.then(function (response) {
  console.log(response.data);
})


app.listen(5000, ()=> console.log("App listening on port 5000"));