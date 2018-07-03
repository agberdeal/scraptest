module.exports.bolsamAT = function () {
    //Extraccion de Analisis de valor:
    // Origen: www.bolsamania.com 

    'use strict'

    // Imports
    let needle = require('needle');
    let cheerio = require('cheerio');

    let Indicador = require('../model/indicador');
    let Diccionario = require('../model/diccionario');

    // Config
    let model = {
        url_at_infom: "http://www.bolsamania.com/megabolsa/mercado/Mercado-continuo/vista-tecnica",
        origenID: "bolsamania",
        mercado: "BME",
        indicador: "tendencia",
        today: new Date()
    };

    //Paso 1: Obtenemos el diccionaario de Tickers
    Diccionario.find({ tipo: "ticker", origen: "bolsamania" }).exec()
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

            // Paso 3A: Conversion de HTML y extraccion las tablas de indicadores tecnicos y medias
            // Lineas tipo CajaDatosFunda y CajaDatosFundaCla
            pagina('table tbody tr').each(function (i) {

                // Conversion de cada linea HTML a objeto Cheerio para poder examinar.
                let linea_html = pagina(this).html();

                let linea = cheerio.load(linea_html, { lowerCaseTags: true, xmlMode: true });

                // Indicador 
                let indicador = new Indicador();

                indicador.fecha = model.today;
                indicador.mercadoID = model.mercado;
                indicador.origenID = model.origenID;
                indicador.indicadorID = model.indicador;

                linea('th,td').each(function (i) {
                    if (i == 0) {
                        let nombre_valor_html = linea(this).html();
                        let nombre_valor = cheerio.load(nombre_valor_html, { lowerCaseTags: true, xmlMode: true });

                        nombre_valor('a').each(function (i) {
                            let nombre_valor_html2 = nombre_valor(this).html().replace(/^\s+|\s+$/g, '');;

                            model.tickers.forEach(function (t, indice, array) {
                                if (nombre_valor_html2 == t.tag) {
                                    indicador.ticker = t.valor;
                                }
                            });
                        });

                    }
                    if (i == 3) {
                        let signo = indFromArrow(linea(this).html());
                        indicador.signo = signo;
                    }
                });
                // Solo guardamos indicadores con signo
                if (indicador.signo != '') {
                    indicador.save();
                }
            });
        });
}

let indFromArrow = function (arrow) {
    let result = "";

    if (arrow.indexOf("alcista") !== -1) {
        result = "alcista";
    }
    if (arrow.indexOf("neutral") !== -1) {
        result = "neutral";
    }
    if (arrow.indexOf("bajista") !== -1) {
        result = "bajista";
    }

    return result;
}



