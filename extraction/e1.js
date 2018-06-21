//Extraccion de Precio y rentabilidad de valores

// Imports
var needle = require('needle');
var cheerio = require('cheerio');

var HistPrecio = require('../model/histPrecio');
var HistRentabilidad = require('../model/histRentabilidad');
var Alias = require('../model/alias');

// Config
const url = "http://www.expansion.com/mercados/cotizaciones/indices/igbolsamadrid_I.MA.html"
const today = new Date();

function e1() {

	//Obtenemos los alias
	Alias.find(function (err, id_valores) {

		// Ejecutamos la extraccion
		needle.get(url, function (err, resp, body) {

			var pagina = cheerio.load(body, { lowerCaseTags: true, xmlMode: true });

			pagina('#listado_valores tbody tr').each(function (i) {

				var linea_html = pagina(this).html();
				var linea = cheerio.load(linea_html, { lowerCaseTags: true, xmlMode: true });

				var histPrecio = new HistPrecio();
				var histRentabilidad = new HistRentabilidad();

				histPrecio.fecha = today;
				histPrecio.mercadoID = "BME";

				histRentabilidad.fecha = today;
				histRentabilidad.mercadoID = "BME";

				linea('td').each(function (i) {
					if (i == 0) {
						var nombre_valor = linea(this).text();

						id_valores.forEach( function(valor, indice, array) {
							if (nombre_valor==valor.tag){
								histPrecio.ticker = valor.ticker;
								histRentabilidad.ticker = valor.ticker;
							}
						});
						
					}
					if (i == 1) {
						histPrecio.precio = parseFloat(linea(this).text().replace(',', '.'));
					}
					if (i == 2) {
						histRentabilidad.rentabilidad = parseFloat(linea(this).text().replace(',', '.'));
					}
				})

				histPrecio.save(function (err) {
					if (err) console.log(err); // Error!
				});
	
				histRentabilidad.save(function (err) {
					if (err) console.log(err); // Error!
				});
			})
		});

	});
}

module.exports.e1 = e1;