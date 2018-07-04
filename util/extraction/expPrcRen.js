module.exports.expPrcRen = function () {

	//Extraccion de Precio y rentabilidad de valores
	'use strict'

	// Imports
	let needle = require('needle');
	let cheerio = require('cheerio');

	let HistPrecio = require('../../model/histPrecio');
	let HistRentabilidad = require('../../model/histRentabilidad');
	let Diccionario = require('../../model/diccionario');

	// Config
	let model = {
		url_expansion : "http://www.expansion.com/mercados/cotizaciones/indices/igbolsamadrid_I.MA.html",
		mercado : "BME",
		today : new Date()
	};

	//Paso 1: Obtenemos los tickers
	Diccionario.find({tipo:"ticker",origen: "expansion"}).exec()
		.then(function (ts) {

			// Agregamos diccionario al modelo.
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
			let pagina = cheerio.load(body, { lowerCaseTags: true, xmlMode: true });

			// Descomponemos la tabla en lineas
			pagina('#listado_valores tbody tr').each(function (i) {

				// Conversion de cada linea HTML a objeto Cheerio para poder examinar.
				let linea_html = pagina(this).html();
				let linea = cheerio.load(linea_html, { lowerCaseTags: true, xmlMode: true });

				// Por cada linea/valor creamos elementos histPrecio e histRentabilidad
				let histPrecio = new HistPrecio();
				let histRentabilidad = new HistRentabilidad();

				histPrecio.fecha = model.today;
				histPrecio.mercadoID = model.mercado;

				histRentabilidad.fecha = model.today;
				histRentabilidad.mercadoID = model.mercado;

				// Descomponemos cada linea para obtener el nombre, precio y la rentabilidad
				linea('td').each(function (i) {
					if (i == 0) {
						// Nombre
						let nombre_valor = linea(this).text();

						model.tickers.forEach(function (t, indice, array) {
							if (nombre_valor == t.tag) {
								histPrecio.ticker = t.valor;
								histRentabilidad.ticker = t.valor;
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
				if (histPrecio.ticker!=undefined){ histPrecio.save(); }
				if (histRentabilidad.ticker!=undefined){ histRentabilidad.save(); }			
			});
				
		});
};