/* Metodo para obtener valores a comprar

        Input:  - Fecha a examinar

        Output: - Lista valores 

        Sistema:

            Origenes: Expansion, Infomercados, PcBolsa, BolsaMania
            Indicadores: Corto Plazo, Medio Plazo, Largo Plazo, Resumen 1, Resumen 2, Tendencia
            Signos: Compra, Fuerte Compra, Alcista, Muy Alcista, Sobreponderar

            Todos los signos de todos los origenes deben ser positivos.
            Si solo un indicador falla, el valor se descarta.
*/
module.exports.execute = function( date ){
    
    let tickers = [];

    return new Promise(function (resolve, reject) {

        // Obtenemos valores alcistas de Expansion
        let valExp = valAlcistasExpansion(date);
        valExp.then(function (vexp) {

            // Obtenemos valores alcistas de InfoMercados
            let valIM = valAlcistasInfoMercados(date);
            valIM.then(function (vim) {

                tickers = intersectArrays(vexp,vim);

                // Obtenemos valores alcistas de PcBolsa
                let valPB = valAlcistasPcBolsa(date);
                valPB.then(function (vpb) {
                    
                    tickers = intersectArrays(tickers,vpb);

                    // Obtenemos valores alcistas de BolsaMania
                    let valBM = valAlcistasBolsaMania(date);
                    valBM.then(function (valbm) {
                    
                        tickers = intersectArrays(tickers,valbm);

                        resolve(tickers);
                    
                    });                    
                });
            });
        });
    });
}

// Devuelve valores Alcistas de www.expansion.com y por fecha
let valAlcistasExpansion = function( date ){
    
    let tickers = [];

    return new Promise(function (resolve, reject) {

        // Obtenemos valores que tienen el indicador de Corto Plazo Alcista
        let valCP = getValoresIndicadorAlcista(date,'expansion','Corto Plazo');
        valCP.then(function (vcp) {

            // Obtenemos valores que tienen el indicador de Medio Plazo Alcista
            let valMP = getValoresIndicadorAlcista(date,'expansion','Medio Plazo');
            valMP.then(function (vmp) {

                tickers = intersectArrays(vcp,vmp);

                // Obtenemos valores que tienen el indicador de Largo Plazo Alcista
                let valLP = getValoresIndicadorAlcista(date,'expansion','Largo Plazo');
                valLP.then(function (vlp) {
                    
                    tickers = intersectArrays(tickers,vlp);

                    console.log("exp: " + tickers.sort());

                    resolve(tickers);                    
                    
                });
            });
        });
    });
}

// Devuelve valores Alcistas de www.infomercados.com y por fecha
let valAlcistasInfoMercados = function( date ){
    
    let tickers = [];

    return new Promise(function (resolve, reject) {

        // Obtenemos valores que tienen el indicador de Corto Plazo Alcista
        let valCP = getValoresIndicadorAlcista(date,'infomercados','Corto Plazo');
        valCP.then(function (vcp) {

            // Obtenemos valores que tienen el indicador de Medio Plazo Alcista
            let valMP = getValoresIndicadorAlcista(date,'infomercados','Medio Plazo');
            valMP.then(function (vmp) {

                tickers = intersectArrays(vcp,vmp);

                // Obtenemos valores que tienen el indicador de Largo Plazo Alcista
                let valLP = getValoresIndicadorAlcista(date,'infomercados','Largo Plazo');
                valLP.then(function (vlp) {
                    
                    tickers = intersectArrays(tickers,vlp);

                    console.log("im: " + tickers.sort());

                    resolve(tickers);                    
                    
                });
            });
        });
    });
}

// Devuelve valores Alcistas de www.pcbolsa.com y por fecha
let valAlcistasPcBolsa = function( date ){
    
    let tickers = [];

    return new Promise(function (resolve, reject) {

        // Obtenemos valores que tienen el indicador de Resumen 1
        let valR1 = getValoresIndicadorAlcista(date,'pcbolsa','Resumen 1');
        valR1.then(function (vr1) {

            // Obtenemos valores que tienen el indicador de Resumen 2
            let valR2 = getValoresIndicadorAlcista(date,'pcbolsa','Resumen 2');
            valR2.then(function (vr2) {

                tickers = intersectArrays(vr1,vr2);

                console.log("pb: " + tickers.sort());

                resolve(tickers); 

            });
        });
    });
}

// Devuelve valores Alcistas de www.bolsamania.com y por fecha
let valAlcistasBolsaMania = function( date ){
    
    return new Promise(function (resolve, reject) {

        // Obtenemos valores que tienen el indicador de tendencia
        let valt = getValoresIndicadorAlcista(date,'bolsamania','tendencia');
        valt.then(function (vt) {

            console.log("bm: " + vt.sort());

            resolve(vt); 
            
        });
    });
}

// Devuelve la interseccion de 2 arrays
let intersectArrays = function( a1 , a2 ){
    return a1.filter(x => -1 !== a2.indexOf(x));
}

// Obtiene Indicadores que cumplen criterios
let getValoresIndicadorAlcista = function (fecha, origen, indicador) {

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
            origenID : origen,
            indicadorID: indicador,
            $or : [
                { signo: { $regex: '.*ompra.*' } },
                { signo: { $regex: '.*Sobreponderar.*' } },
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