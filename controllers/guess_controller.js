// Sample guess controller file
//============================
// This file uses Sequelize to manage data manipulation
// and routes HTTP requests

var express = require("express");
var router = express.Router();

var db = require("../models/"); // edit data model to match sequelize

// Get route "/" and redirect to main page
router.get("/", function(req, rest) {
    res.redirect("/main");
});

// Get route "/data" 
router.get("/data", function(req, res) {
   db.Data.findAll()
   .then(function(dbGuess) {
       console.log(dbGuess);

       var hasData = { data: dbData };
       return res.render("index", hasData);
   });
});