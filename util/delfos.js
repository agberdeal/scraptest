module.exports.s1 = function () {

    'use strict'

    // Imports
    let s1QueComprar = require('./sistemas/s1QueComprar');
    let s1QueMantener = require('./sistemas/s1QueMantener');

    // sistemear a tope!
    let date = new Date("2018-07-06");

    // Sistema 1: Que comprar
    /** 
    let tickersCompra = s1QueComprar.execute(date);
    tickersCompra.then(function (tickers) {

        console.log(tickers);

    }); */

    // Sistema 1: Que mantener
    let tickers = ['BIO','IBG','SLR'];
    let evalua = s1QueMantener.execute(tickers,date);
    evalua.then(function (e) {

        console.log(e);

    }); 
    
    /*
    // test
    let test = test1();
    test.then(function (t) {

        console.log(t);

    });*/
}

// Obtiene signos existentes
let test1 = function () {

    // Imports
    let Indicador = require('../model/indicador');

    return new Promise(function (resolve, reject) {
        
        Indicador.find({ 
            indicadorID: {$in : ['Resumen 1','Resumen 2','Corto Plazo','Medio Plazo','Largo Plazo']},
            
        })
            .distinct('signo')
            .exec()
            .then(function (is) {
                console.log(is);
                resolve(is);
            });
    });
}