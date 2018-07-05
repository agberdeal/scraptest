module.exports.s1 = function () {

    'use strict'

    // Imports


    // sistemear a tope!
    let date = new Date("2018-07-04");

    // Devuelve valores Alcistas por fecha
    let valAl = valAlcistas(date);
    valAl.then(function (vals) {

        console.log(vals);

    });
    
}

// Devuelve valores Alcistas por fecha
let valAlcistas = function( date ){
    
    return new Promise(function (resolve, reject) {

        // Obtenemos valores que tienen el indicador de Corto Plazo Alcista
        let valCP = getValoresIndicadorAlcista(date,'Corto Plazo');
        valCP.then(function (vcp) {

            // Obtenemos valores que tienen el indicador de Medio Plazo Alcista
            let valMP = getValoresIndicadorAlcista(date,'Medio Plazo');
            valMP.then(function (vmp) {

                tickers = intersectArrays(vcp,vmp);

                // Obtenemos valores que tienen el indicador de Largo Plazo Alcista
                let valLP = getValoresIndicadorAlcista(date,'Largo Plazo');
                valLP.then(function (lmp) {
                    
                    tickers = intersectArrays(tickers,lmp);

                    // Obtenemos valores que tienen el indicador de Resumen 1 Alcista
                    let valR1 = getValoresIndicadorAlcista(date,'Resumen 1');
                    valR1.then(function (r1) {
                    
                        tickers = intersectArrays(tickers,r1);

                        // Obtenemos valores que tienen el indicador de Resumen 2 Alcista
                        let valR2 = getValoresIndicadorAlcista(date,'Resumen 2');
                        valR2.then(function (r2) {
                    
                            tickers = intersectArrays(tickers,r2);

                            // Obtenemos valores que tienen el indicador de tendencia Alcista
                            let valT = getValoresIndicadorAlcista(date,'tendencia');
                            valT.then(function (t) {
                    
                                tickers = intersectArrays(tickers,t);

                                resolve(tickers);
                    
                            });
                    
                        });
                    
                    });
                    
                });

            });

        });
    });
}

// Devuelve la interseccion de 2 arrays
let intersectArrays = function( a1 , a2 ){
    return a1.filter(x => -1 !== a2.indexOf(x));
}

// Obtiene Indicadores que cumplen criterios
let getValoresIndicadorAlcista = function (fecha, indicadorID) {

    // Imports
    let Indicador = require('../model/indicador');

    // Rango de fechas
    let fecIni = fecha;
    fecIni.setUTCHours(0, 0, 0, 0);
    let fecFin = fecIni;
    fecFin.setDate(fecFin.getDate() + 1);


    return new Promise(function (resolve, reject) {
        
        Indicador.find({ 
            fecha : { $gt : fecIni },
            fecha : { $lt : fecFin }, 
            indicadorID: indicadorID,
            $or : [
                { signo: { $regex: '.*ompra.*' } },
                { signo: { $regex: '.*lcista.*' } }
            ]
        })
            .distinct('ticker')
            //.sort({ ticker: 1 })
            .exec()
            .then(function (is) {
                resolve(is);
            });
    });
}
