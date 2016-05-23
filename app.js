;(function(){

	'use strict';

    /*
       Faz a chamada dos arquivos necessarios para o app funcionar 
    */

	const express = require('express');
	const path    = require('path');

	const cookie  = require('cookie-parser');
	const session = require('cookie-session');
	
	const bodyParses  = require('body-parser');

	const middleware  = require('connect-multiparty');

	// instancia o app 
	const app = express();

	/******************************************************
	*			     Configurando o Server			      * 
	******************************************************/

	app.use(middleware());
	app.use(cookie());

	let config = {
		name: 'session-class',
		secret: 'sesssion-class-study-of-node'
	};

	app.use(session(config));
	app.use(bodyParses.urlencoded({ extended: true }));
	app.use(bodyParses.json());

	let ipAddress = '127.0.0.1';
	let port      = 3000;

    app.use( (req, res, next) => {
    	res.header('Access-Control-Allow-Origin', '*');
    	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    	res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    	next();
    });

    let serverOline = new Date;

    app.listen( port, ipAddress, () => {
    	console.log('Server up ======> ' + serverOline);
    });

    let api = {};

    app.get( '*', (req, resp) => {
    	res.json({
    		   success: true
    		,  msg: 'Sever online ' + serverOline
    	});
    });
	


}());