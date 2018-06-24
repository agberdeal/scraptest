//Extraccion de Analisis Tecnico:
// Origen: www.expansion.com 
// Valor: Abengoa.A
module.exports.eat1 = function (em) {

	'use strict'

	// Imports
	let needle = require('needle');
	let cheerio = require('cheerio');

	let Indicador = require('../model/indicador');
	let Diccionario = require('../model/diccionario');

	// Config
	let model = {
		url_expansion: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/a/abengoa_NEABG.html",
		ticker: "ABG",
		origenID:"expansion",
		mercado: "BME",
		today: new Date()
	};

	//Paso 1: Obtenemos los indicadores
	Diccionario.find({ tipo: "indicador" }).exec()
		.then(function (is) {

			// Agregamos diccionario al modelo.
			model.indicadores = is;

			// Paso 2: Extraccion de cuerpo de web: www.expansion.com
			return new Promise(function (resolve, reject) {
				needle.get(model.url_expansion,
					function (err, resp, body) {
						if (err) reject(err);
						resolve(body);
					});
			})

		}).then(function (body) {


			// Paso 3: Conversion de HTML y extraccion la tabla de tendencias

			// Conversion de cuerpo HTML a objeto Cheerio para poder examinar.
			let pagina = cheerio.load(body, { lowerCaseTags: true, xmlMode: true });

			// Paso 3A: Conversion de HTML y extraccion la tabla de tendencias

			// Solo hay una tabla de tendencias
			pagina('section.tendencia tbody tr').each(function (i) {

				// Conversion de cada linea HTML a objeto Cheerio para poder examinar.
				let linea_html = pagina(this).html();

				let linea = cheerio.load(linea_html, { lowerCaseTags: true, xmlMode: true });
				// Por cada linea/tendencia -> img:
				linea('td img').each(function (i) {
					if (i == 0) {

						let señal = linea(this).attr('title');
		
						// Indicador Corto Plazo
						let indicadorCP = new Indicador();
						indicadorCP.fecha = model.today;
						indicadorCP.mercadoID = model.mercado;
						indicadorCP.ticker = model.ticker;
						indicadorCP.origenID = model.origenID;
						indicadorCP.indicadorID = "Corto Plazo";
						indicadorCP.señal = señal;	

						//indicadorCP.save();
					}
					if (i == 1) {

						let señal = linea(this).attr('title');

						// Indicador Medio Plazo
						let indicadorMP = new Indicador();
						indicadorMP.fecha = model.today;
						indicadorMP.mercadoID = model.mercado;
						indicadorMP.ticker = model.ticker;
						indicadorMP.origenID = model.origenID;
						indicadorMP.indicadorID = "Largo Plazo";
						indicadorMP.señal = señal;	

						//indicadorMP.save();
					}
					if (i == 2) {

						let señal = linea(this).attr('title');

						// Indicador Largo Plazo
						let indicadorLP = new Indicador();
						indicadorLP.fecha = model.today;
						indicadorLP.mercadoID = model.mercado;
						indicadorLP.ticker = model.ticker;
						indicadorLP.origenID = model.origenID;
						indicadorLP.indicadorID = "Largo Plazo";
						indicadorLP.señal = señal;	

						//indicadorLP.save();
					}
				});
				
			});

			// Paso 3B: Conversion de HTML y extraccion la tabla de indicadores
			// Solo hay una tabla de indicadores

			// Por cada linea/indicador..
			pagina('div.pestana_GDP.activaJs tbody tr').each(function (i) {

				// Conversion de cada linea HTML a objeto Cheerio para poder examinar.
				let linea_html = pagina(this).html();

				// Instanciamos el indicador
				let indicador = new Indicador();
				indicador.fecha = model.today;
				indicador.mercadoID = model.mercado;
				indicador.ticker = model.ticker;
				indicador.origenID = model.origenID;
				
				let linea = cheerio.load(linea_html, { lowerCaseTags: true, xmlMode: true });
				
				linea('td').each(function (i) {
					
					if (i == 0) {
						let nombre_indicador = linea(this).text();
						
						model.indicadores.forEach(function (i, indice, array) {
							if (nombre_indicador == i.tag) {
								indicador.indicadorID = i.valor;
							}
						});						
					}
					if (i == 1) {
						indicador.valorAnerior = linea(this).text();
					}
					if (i == 2) {
						indicador.valorActual = linea(this).text();
					}
					if (i == 3) {
						let señal_html = linea(this).html();

						let señal = cheerio.load(señal_html, { lowerCaseTags: true, xmlMode: true });

						señal('img').each(function (j) {
							indicador.señal = señal(this).attr('title');
						});						
					}
					if (i == 4) {
						indicador.comentario = linea(this).text();
					}					
				});
				
				if (indicador.indicadorID!=undefined){ indicador.save(); }
			});

		});
};


