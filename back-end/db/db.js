;(function(){
	'use strict';

	const mysql = require('mysql');
	const config, database;

	config = {
			host: 'localhost'
		,	user: 'root'
		, 	pass: 'root'
		, 	database: '' 
	}

  database = mysql.createConnection( config );
  
  module.exports = database;
}());