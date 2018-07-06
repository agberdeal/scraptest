/* Metodo para examinar que valores se deben mantener a una fecha

        Input:  - Fecha a examinar
                - Lista valores a examinar

        Output: - Lista valores + Criterio

        Sistema:

            Origenes: Expansion, Infomercados, PcBolsa, BolsaMania
            Indicadores: Corto Plazo, Medio Plazo, Largo Plazo, Resumen 1, Resumen 2, Tendencia
            Signos: Compra, Fuerte Compra, Alcista, Muy Alcista, Sobreponderar, Mantener, Neutral

            Examinamos cada valor obteniendo todos sus indicadores, si cumple se marca para mantener.
            En caso contrario se marca como venta.
*/
module.exports.execute = function( tickers, fecha ){
    
    let evaluacion = [];

    return new Promise(function (resolve, reject) {

        // Iteramos el array de valores comprobando si debemos mantener la inversión o no
        tickers.reduce(
            function(ix,ticker){

                return ix.then(function(){

                    return valMantenible(fecha, ticker);

                }).then(function(vman) { 
                    evaluacion.push({ticker: ticker, eval: vman});
                });

            },
            Promise.resolve()
        ).then(function(){
        
            resolve(evaluacion);
        });
    });
}


// Retorna OK o KO si el valor es mantenible o no
let valMantenible = function( fecha , ticker ){

    const ok = "OK";
    const ko = "KO";

    return new Promise(function (resolve, reject) {

        // Evaluamos si el valor es mantenible según Expansion
        let valExp = valMantenibleExpansion(fecha, ticker);
        valExp.then(function (eval_exp) {

            if(eval_exp==ko) {
                resolve(ko);
            }else{

                // Evaluamos si el valor es mantenible según InfoMercados
                let valIM = valMantenibleInfoMercados(fecha, ticker);
                valIM.then(function (eval_im) {

                    if(eval_im==ko) {
                        resolve(ko);
                    }else{

                        // Evaluamos si el valor es mantenible según PcBolsa
                        let valPB = valManteniblePcBolsa(fecha, ticker);
                        valPB.then(function (eval_pb) {
                            
                            if(eval_pb==ko) {
                                resolve(ko);
                            }else{

                                // Evaluamos si el valor es mantenible según BolsaMania
                                let valBM = valMantenibleBolsamania(fecha, ticker);
                                valBM.then(function (eval_bm) {
                                
                                    if(eval_pb==ko) {
                                        resolve(ko);
                                    }else{
                                        resolve(ok);
                                    }                        
                                }); 
                            }                   
                        });
                    }
                });
            }
        });
    });
}

// Obtenemos si www.expansion.com marca el valor como mantenible
let valMantenibleExpansion = function( fecha, ticker ){
    
    const ok = "OK";
    const ko = "KO";
    
    return new Promise(function (resolve, reject) {

        // Obtenemos si el indicador de Corto Plazo marca Mantener
        let valCP = getIndicadorMantener(fecha, ticker, 'expansion','Corto Plazo');
        valCP.then(function (vcp) {

            if(vcp==ko) {
                resolve(ko);
            }else{

                // Obtenemos si el indicador de Medio Plazo marca Mantener
                let valMP = getIndicadorMantener(fecha, ticker,'expansion','Medio Plazo');
                valMP.then(function (vmp) {
                    
                    if(vmp==ko) {
                        resolve(ko);
                    }else{

                        // Obtenemos si el indicador de Largo Plazo marca Mantener
                        let valLP = getIndicadorMantener(fecha, ticker,'expansion','Largo Plazo');
                        valLP.then(function (vlp) {
                        
                            if(vmp==ko) {
                                resolve(ko);
                            }else{
                                resolve(ok);
                            }  
                        });  
                    }                  
                });
            }
        });
    });
}

// Obtenemos si www.infomercados.com marca el valor como mantenible
let valMantenibleInfoMercados = function( fecha, ticker ){
    
    const ok = "OK";
    const ko = "KO";
    
    return new Promise(function (resolve, reject) {

        // Obtenemos si el indicador de Corto Plazo marca Mantener
        let valCP = getIndicadorMantener(fecha, ticker, 'infomercados','Corto Plazo');
        valCP.then(function (vcp) {

            if(vcp==ko) {
                resolve(ko);
            }else{

                // Obtenemos si el indicador de Medio Plazo marca Mantener
                let valMP = getIndicadorMantener(fecha, ticker,'infomercados','Medio Plazo');
                valMP.then(function (vmp) {
                    
                    if(vmp==ko) {
                        resolve(ko);
                    }else{

                        // Obtenemos si el indicador de Largo Plazo marca Mantener
                        let valLP = getIndicadorMantener(fecha, ticker,'infomercados','Largo Plazo');
                        valLP.then(function (vlp) {
                        
                            if(vmp==ko) {
                                resolve(ko);
                            }else{
                                resolve(ok);
                            }  
                        });  
                    }                  
                });
            }
        });
    });
}

// Obtenemos si www.pcbolsa.com marca el valor como mantenible
let valManteniblePcBolsa = function( fecha, ticker ){
    
    const ok = "OK";
    const ko = "KO";
    
    return new Promise(function (resolve, reject) {

        // Obtenemos si el indicador de Resumen 1 marca Mantener
        let valR1 = getIndicadorMantener(fecha, ticker, 'pcbolsa','Resumen 1');
        valR1.then(function (vr1) {

            if(vr1==ko) {
                resolve(ko);
            }else{

                // Obtenemos si el indicador de Resumen 2 marca Mantener
                let valR2 = getIndicadorMantener(fecha, ticker,'pcbolsa','Resumen 2');
                valR2.then(function (vr2) {
                    
                    if(vr2==ko) {
                        resolve(ko);
                    }else{
                        resolve(ok);                        
                    }                  
                });
            }
        });
    });
}

// Obtenemos si www.bolsamania.com marca el valor como mantenible
let valMantenibleBolsamania = function( fecha, ticker ){
    
    const ok = "OK";
    const ko = "KO";
    
    return new Promise(function (resolve, reject) {

        // Obtenemos si el indicador de tendencia marca Mantener
        let valt = getIndicadorMantener(fecha, ticker, 'bolsamania','tendencia');
        valt.then(function (vt) {

            if(vt==ko) {
                resolve(ko);
            }else{
                resolve(ok);                        
            }                  
        });
    });
}

// Obtiene Indicadores que cumplen criterios
let getIndicadorMantener = function (fecha, ticker, origen, indicador) {
    
    // Imports
    let Indicador = require('../../model/indicador');

    // Rango de fechas
    let fecIni = new Date(fecha);
    fecIni.setUTCHours(0, 0, 0, 0);
    let fecFin = new Date(fecIni);
    fecFin.setDate(fecFin.getDate() + 1); 
    
    return new Promise(function (resolve, reject) {

        Indicador.find({ 
            fecha : { $gt : fecIni },
            fecha : { $lt : fecFin },
            ticker : ticker, 
            origenID : origen,
            indicadorID: indicador,
            $or : [
                { signo: { $regex: '.*ompra.*' } },
                { signo: { $regex: '.*Sobreponderar.*' } },
                { signo: { $regex: '.*lcista.*' } },
                { signo: { $regex: '.*antener.*' } },
                { signo: { $regex: '.*eutral.*' } }
            ]
        })
            .exec()
            .then(function (is) {
                
                // Si la query retorna elemntos es que el valor se mantiene
                if(is.length>0) {
                    //console.log(ticker + " " + origen + " " + indicador + " OK");
                    resolve("OK");
                }else{
                    console.log(ticker + " " + origen + " " + indicador + " KO");
                    resolve("KO");
                }

            });
    });
}