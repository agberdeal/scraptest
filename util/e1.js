//Extraccion de Precio y rentabilidad de valores
module.exports.e1 = function (em) {

	'use strict'

	// Imports
	var needle = require('needle');
	var cheerio = require('cheerio');
	var mongoose = require('mongoose');

	var HistPrecio = require('../model/histPrecio');
	var HistRentabilidad = require('../model/histRentabilidad');
	var Ticker = require('../model/ticker');

	// Config
	let model = {
		url_expansion : "http://www.expansion.com/mercados/cotizaciones/indices/igbolsamadrid_I.MA.html",
		mercado : "BME",
		today : new Date()
	};

	

	//Paso 1: Obtenemos los tickers
	Ticker.find().exec()
		.then(function (ts) {

			// Agregamos tickers al modelo.
			model.tickers = ts;

			// Paso 2: Extraccion de cuerpo de web: www.expansion.com
			return new Promise(function (resolve, reject) {
				needle.get(model.url_expansion, 
					function (err, resp, body) {
						if (err) reject(err);
						resolve(body);
					});
			})

		}).then(function (body) {
			
			// Paso 3: Conversion de HTML y extraccion de lista de valores			
			
			// Conversion de cuerpo HTML a objeto Cheerio para poder examinar.
			var pagina = cheerio.load(body, { lowerCaseTags: true, xmlMode: true });

			// Descomponemos la tabla en lineas
			pagina('#listado_valores tbody tr').each(function (i) {

				// Conversion de cada linea HTML a objeto Cheerio para poder examinar.
				var linea_html = pagina(this).html();
				var linea = cheerio.load(linea_html, { lowerCaseTags: true, xmlMode: true });

				// Por cada linea/valor creamos elementos histPrecio e histRentabilidad
				var histPrecio = new HistPrecio();
				var histRentabilidad = new HistRentabilidad();

				histPrecio.fecha = model.today;
				histPrecio.mercadoID = model.mercado;

				histRentabilidad.fecha = model.today;
				histRentabilidad.mercadoID = model.mercado;

				// Descomponemos cada linea para obtener el nombre, precio y la rentabilidad
				linea('td').each(function (i) {
					if (i == 0) {
						// Nombre
						var nombre_valor = linea(this).text();

						model.tickers.forEach(function (t, indice, array) {
							if (nombre_valor == t.tag) {
								histPrecio.ticker = t.ticker;
								histRentabilidad.ticker = t.ticker;
							}
						});

					}
					if (i == 1) {
						// Precio
						histPrecio.precio = parseFloat(linea(this).text().replace(',', '.'));
					}
					if (i == 2) {
						// Rentabilidad
						histRentabilidad.rentabilidad = parseFloat(linea(this).text().replace(',', '.'));
					}
				})

				// Guardamos los elementos en la BBDD.
				histPrecio.save();
				histRentabilidad.save();
			
			});

			// tras tratar todas las lineas enviamos evento de fin de proceso.
			setTimeout(function(){
                em.emit('END-E1','Fin de proceso!');
            }
            , 3000); // Esperamos 3 segundos  
				
		});
};


