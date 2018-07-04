module.exports.informAT = function () {

    //Extraccion de Analisis de valor:
    // Origen: www.infomercados.com 

    'use strict'

    // Imports
    let needle = require('needle');
    let cheerio = require('cheerio');

    let Indicador = require('../../model/indicador');
    let Diccionario = require('../../model/diccionario');

    // Config
    let model = {
        url_at_infom: "http://www.infomercados.com/analisis/analisis-tecnico/mercado-continuo/",
        origenID: "infomercados",
        mercado: "BME",
        today: new Date()
    };

    //Paso 1: Obtenemos el diccionaario de Tickers
    Diccionario.find({ tipo: "ticker", origen: "infomercados" }).exec()
        .then(function (ts) {

            // Agregamos diccionario al modelo.
            model.tickers = ts;

            // Paso 2: Extraccion de cuerpo de web: www.pcbolsa.com
            return new Promise(function (resolve, reject) {
                needle.get(model.url_at_infom,
                    function (err, resp, body) {
                        if (err) reject(err);
                        resolve(body);
                    });
            })

        }).then(function (body) {

            // Paso 3: Conversion de HTML y extraccion de indicadores tecnicos

            // Conversion de cuerpo HTML a objeto Cheerio para poder examinar.
            let pagina = cheerio.load(body, { lowerCaseTags: true, xmlMode: true });


            // Paso 3A: Conversion de HTML y extraccion de tabla de valores
            pagina('table[id="ana_analisistecnico1"] tbody tr').each(function (i) {

                // Conversion de cada linea HTML a objeto Cheerio para poder examinar.
                let linea_html = pagina(this).html();

                let linea = cheerio.load(linea_html, { lowerCaseTags: true, xmlMode: true });

                let ticker = "";

                linea('th,td').each(function (i) {
                    if (i == 0) {
                        let nombre_valor = linea(this).text().replace('&nbsp;', '').replace(/^\s+|\s+$/g, '');

                        model.tickers.forEach(function (t, indice, array) {
                            if (nombre_valor == t.tag) {
                                ticker = t.valor;
                            }
                        });
                    }
                    if (i == 4) {
                        let flecha = linea(this).html();

                        // Indicador 
                        let indicador = new Indicador();

                        indicador.fecha = model.today;
                        indicador.mercadoID = model.mercado;
                        indicador.origenID = model.origenID;
                        indicador.indicadorID = "Corto Plazo";
                        indicador.signo = indFromArrow(flecha);
                        indicador.ticker = ticker;

                        indicador.save();
                    }
                    if (i == 5) {
                        let flecha = linea(this).html();
                        
                        // Indicador 
                        let indicador = new Indicador();

                        indicador.fecha = model.today;
                        indicador.mercadoID = model.mercado;
                        indicador.origenID = model.origenID;
                        indicador.indicadorID = "Medio Plazo";
                        indicador.signo = indFromArrow(flecha);
                        indicador.ticker = ticker;
                        
                        indicador.save();
                    }
                    if (i == 6) {
                        let flecha = linea(this).html();

                        // Indicador 
                        let indicador = new Indicador();
                        
                        indicador.fecha = model.today;
                        indicador.mercadoID = model.mercado;
                        indicador.origenID = model.origenID;
                        indicador.indicadorID = "Largo Plazo";
                        indicador.signo = indFromArrow(flecha);
                        indicador.ticker = ticker;

                        indicador.save();
                    }
                });
            });
        });
}

let indFromArrow = function (arrow) {
    let result = "";

    if (arrow.indexOf("pos") !== -1) {
        result = "alcista";
    }
    if (arrow.indexOf("neu") !== -1) {
        result = "neutral";
    }
    if (arrow.indexOf("neg") !== -1) {
        result = "bajista";
    }

    return result;
}



