//npm install --save express needle cheerio path handlebars mongodb mongoose
var express = require('express');
var path = require('path');
var needle = require('needle');
var cheerio = require('cheerio');
var fs = require('fs');
var mongodb = require('mongodb').MongoClient;
var assert = require('assert');


var app = express();
var port = 8000;

var url = "http://www.expansion.com/mercados/cotizaciones/indices/igbolsamadrid_I.MA.html"
var url_exp="http://www.expansion.com"
var url_mongo="mongodb://localhost/"
var database="inv"


// Ejemplo conexion a MongoDB
extraccion(function (listaValores) {
	//console.log(listaValores);

	// insercion en mongodb
	mongodb.connect(url_mongo, function(err, db){
		if(!err){
			var dbo=db.db(database);
			dbo.collection('valores').insertMany(listaValores,function(err,res){
				if(!err){
					console.log("insercion realizada!");
				}else{
					console.log("lvl1" + err);
				}			
			});
	
			
		}else{
			console.log("lvl2" + err);
		}
		db.close();		
	});
})

// Ejemplo uso de promesas
new Promise(function(res,err){
    console.log("p1");
    res("hola");
}).then(
    function(res){
        console.log("p2");
        return process.exit(0);
    }
).catch(
    function(err){
        console.log("p2err: " + err);
    }
);
