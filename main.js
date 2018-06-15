//npm install --save express needle cheerio path handlebars
var express= require('express');
var path = require('path');
var needle = require('needle');
var cheerio = require('cheerio');
var fs = require('fs');

var app = express();
var port =8000;

var url="http://www.expansion.com/mercados/cotizaciones/indices/igbolsamadrid_I.MA.html"

/*
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
*/

needle.get(url, function(err, resp, body) {
	
	pagina = cheerio.load(body,{lowerCaseTags: true, xmlMode: true});
	
	pagina('#listado_valores tbody tr').each(function(){
		var linea_html=pagina(this).html();

		var linea = cheerio.load(linea_html,{lowerCaseTags: true, xmlMode: true});
	
		linea('td').each(function(i){
			if(i==0) {
				console.log("Company: " + linea(this).text());
			}
			if(i==1) {
				console.log("Price: " + linea(this).text());
			}
			if(i==2) {
				console.log("Var %: " + linea(this).text());
			}			
		})								
	})
});







