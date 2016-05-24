;(function(){
	'use strict';

	const express = require('express');
	const ctrl    = require('./controller.js');

	const route   = express.Router();


	route.get('/', Index);


	function Index(req, resp)
	{

	}

	module.exports = route;
}());