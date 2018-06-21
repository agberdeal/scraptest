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
var url_mongo="mongodb://localhost:27017/"
var database="inversion"

/* Ejemplo 1
needle.get(url, function(err, resp, body) {
	
	$ = cheerio.load(body,{lowerCaseTags: true, xmlMode: true});
	
	//console.log($('#listado_valores').html());
	var i=1;
	$('#listado_valores tbody tr td a').each(function(){
		var companyName = $(this).text();
		if (companyName!="") {
			console.log(i + " " + companyName);
			i++;
		}						
	})
});

/* Ejemplo 2

needle.get(url, function (err, resp, body) {

	pagina = cheerio.load(body, { lowerCaseTags: true, xmlMode: true });

	pagina('#listado_valores tbody tr').each(function () {
		var linea_html = pagina(this).html();

		var linea = cheerio.load(linea_html, { lowerCaseTags: true, xmlMode: true });

		linea('td').each(function (i) {
			if (i == 0) {
				console.log("Company: " + linea(this).text());
			}
			if (i == 1) {
				console.log("Price: " + linea(this).text());
			}
			if (i == 2) {
				console.log("Var %: " + linea(this).text());
			}
		})
	})

});

/** Ejemplo 4 
needle.get(url, function(err, resp, body) {
	
	pagina = cheerio.load(body,{lowerCaseTags: true, xmlMode: true});
	
	var i=1;
	pagina('#listado_valores tbody tr td.primera').each(function(){
		valor_html = pagina(this).html();						

		valor = cheerio.load(valor_html,{lowerCaseTags: true, xmlMode: true});

		console.log(valor('a').text() + " - " + url_exp + valor('a').attr('href'));
	})
});

/* Ejemplo 5 */ 
function extraccion(callback) {

	needle.get(url, function (err, resp, body) {

		var pagina = cheerio.load(body, { lowerCaseTags: true, xmlMode: true });

		var valores=[];

		pagina('#listado_valores tbody tr').each(function () {

			var linea_html = pagina(this).html();
			var linea = cheerio.load(linea_html, { lowerCaseTags: true, xmlMode: true });

			var valor = { 
				name: "" ,
				url_info:"",
				precio: 0,
				rentabilidad: 0
			};

			linea('td').each(function (i) {
				if (i == 0) {
					valor.name = linea(this).text();
					valor_html = linea(this).html();

					primera = cheerio.load(valor_html,{lowerCaseTags: true, xmlMode: true});
					url_relativa = primera('a').attr('href');
					valor.url_info = url_exp + url_relativa;				
				}
				if (i == 1) {
					valor.precio = linea(this).text();
				}
				if (i == 2) {
					valor.rentabilidad = linea(this).text();
				}
			})

			valores.push(valor);
		})

		callback(valores);
	});
}

// Ejecucion
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

/** 
Alias.where({ tag:"TUBACEX" }).findOne(function (err, alias) {
	if (err) console.log(err);;
	if (alias) {
	  console.log(alias.ticker);
	}
  });

  /**const cursor = Alias.find({tag:"TUBACEX"}).cursor();
/**cursor.on('data', function(doc) {
    console.log(doc.ticker);
});**/







