const express = require('express');
const app = express();
const axios = require("axios");

app.get('/', (req, res) => res.send("Hello!"));

var api = 'https://api.giphy.com/v1/gifs/search?';
var apikey = "&api_key=###########";
var query = "&q=toy+story&limit=3";

axios.get(api + apikey + query)
.then(function (response) {
  console.log(response.data);
})


app.listen(5000, ()=> console.log("App listening on port 5000"));