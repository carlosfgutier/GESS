var express = require("express");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 8000;
var app = express();

// Serve static content from this directory
app.use(express.static(__dirname + '/dist'));
app.use(express.static(__dirname + '/public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// var routes = require("./controllers/burgersController.js");
// app.use(routes);

app.listen(PORT, function() {
  console.log("Listening on port", PORT);
});