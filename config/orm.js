var connection = require("./connection.js");

var orm = {

//List of functions that take imput and conditions
//and turns them into database queries. 

//For example:

	// 'Greet all' button triggers function that selects all names 
	all: function(name, cb) {
		var queryString = "SELECT * FROM" + name + ";";
		connection.query(queryString, function(err, result) {

		if (err) {
			throw err;
		} 	
		cb(result);
		});
	};
};