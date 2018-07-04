//Extraccion de Analisis de valor:
// Origen: www.pcbolsa.com 
module.exports.pcBolsaATvalor = function (id_valor,url) {

	'use strict'

	// Imports
	let needle = require('needle');
	let cheerio = require('cheerio');

	let Indicador = require('../../model/indicador');
	let Diccionario = require('../../model/diccionario');

	// Config
	let model = {
		url_at_pcbolsa: url,
		ticker: id_valor,
		origenID:"pcbolsa",
		mercado: "BME",
		today: new Date()
	};

	//Paso 1: Obtenemos los indicadores
	Diccionario.find({ tipo: "indicador" }).exec()
		.then(function (is) {

			// Agregamos diccionario al modelo.
			model.indicadores = is;

			// Paso 2: Extraccion de cuerpo de web: www.pcbolsa.com
			return new Promise(function (resolve, reject) {
				needle.get(model.url_at_pcbolsa,
					function (err, resp, body) {
						if (err) reject(err);
						resolve(body);
					});
			})

		}).then(function (body) {

            let contador = 1;

			// Paso 3: Conversion de HTML y extraccion de indicadores tecnicos

			// Conversion de cuerpo HTML a objeto Cheerio para poder examinar.
			let pagina = cheerio.load(body, { lowerCaseTags: true, xmlMode: true });
    
            // Paso 3A: Conversion de HTML y extraccion las tablas de indicadores tecnicos y medias
            // Lineas tipo CajaDatosFunda y CajaDatosFundaCla
			pagina('div[class="CajaDatosFunda"],div[class="CajaDatosFundaCla"]').each(function (i) {

				// Conversion de cada linea HTML a objeto Cheerio para poder examinar.
                let linea_html = pagina(this).html();

                let linea = cheerio.load(linea_html, { lowerCaseTags: true, xmlMode: true });
                
                // Indicador 
                let indicador = new Indicador();
                
                indicador.fecha = model.today;
				indicador.mercadoID = model.mercado;
				indicador.ticker = model.ticker;
				indicador.origenID = model.origenID;
				
				linea('div').each(function (i) {
					if (i == 0) {
                         let inombre = linea(this).text().replace(': ', '').replace(':', ''); 
                         if (inombre == "Resumen") {
                            inombre = inombre + " " + contador;
                            contador++;
                         }
                         indicador.indicadorID = inombre;
                    }
                    if (i == 1) {
                        // Signo de resumen
                        indicador.signo=linea(this).text();                       
                    }
					if (i == 2) {
                        // Signo de indicadores
                        indicador.signo=linea(this).text();                        
                    }
                });

                indicador.save();               
				
			});
		});
};