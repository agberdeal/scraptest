// Compra de valores por importe
module.exports.operar = function (portfolioID, fechaOrden, mercadoID, ticker, tipo, importe) {

    'use strict'

    // Obtiene el precio según última cotización
    let precio = getPrecio(mercadoID, ticker, fechaOrden);
    precio.then(function (precio) {

        let titulosOp = Math.floor(importe / precio);
        let importeOp = titulosOp * precio;

        // Obtenemos última posición de la cartera y valor
        let ultPos = getUltimaPosicion(portfolioID, mercadoID, ticker);
        ultPos.then(function (ultPos) {

            let nuevaPos = 0;
            // Calculamos nueva Pos
            if (tipo == "Compra") { nuevaPos = ultPos.titulos + titulosOp; }
            if (tipo == "Venta") { nuevaPos = ultPos.titulos - titulosOp; }
            

            // Salvamos la nueva posición
            savePosicion(portfolioID, fechaOrden, mercadoID, ticker, nuevaPos);

            // Salvamos la nueva orden
            saveOrden(portfolioID, fechaOrden, mercadoID, ticker, tipo, importeOp, titulosOp);
            
        }).catch(function(err){

            //Si no hay última posición creamos la inicial
            let nuevaPos = titulosOp;            

            // Salvamos la nueva posición
            savePosicion(portfolioID, fechaOrden, mercadoID, ticker, nuevaPos);

            // Salvamos la nueva orden
            saveOrden(portfolioID, fechaOrden, mercadoID, ticker, tipo, importeOp, titulosOp);
        });        
    });
}

// Obtiene el precio según última cotización
let getPrecio = function (mercadoID, ticker, fechaOrden) {

    let HistPrecio = require('../model/histPrecio');

    return new Promise(function (resolve, reject) {
        HistPrecio.findOne({ mercadoID: mercadoID, ticker: ticker, fecha: { $lt: fechaOrden } })
            .sort({ fecha: -1 })
            .exec()
            .then(function (hp) {
                resolve(hp.precio);
            });
    });
}

// Obtiene la última posición 
let getUltimaPosicion = function (portfolioID, mercadoID, ticker) {

    let Posicion = require('../model/posicion');

    return new Promise(function (resolve, reject) {
        Posicion.findOne({ portfolioID: portfolioID, mercadoID: mercadoID, ticker: ticker })
            .sort({ fecha: -1 })
            .exec()
            .then(function (pos) {
                resolve(pos);
            });
    });
}

// Salvamos la nueva posición
let savePosicion = function (portfolioID, fecha, mercadoID, ticker, titulosOp) {

    let Posicion = require('../model/posicion');

    // Actualizamos la posición;
    let posicion = new Posicion();

    posicion.portfolioID = portfolioID;
    posicion.fecha = fecha;
    posicion.mercadoID = mercadoID;
    posicion.ticker = ticker;
    posicion.titulos = titulosOp;

    // Guardamos
    posicion.save();
}

// Salvamos la nueva orden
let saveOrden = function (portfolioID, fecha, mercadoID, ticker, tipo, importeOp, titulosOp) {

    let Orden = require('../model/orden');
    // Creamos la orden
    let orden = new Orden();

    orden.portfolioID = portfolioID;
    orden.fecha = fecha;
    orden.mercadoID = mercadoID;
    orden.ticker = ticker;
    orden.tipo = tipo;
    orden.importe = importeOp;
    orden.titulos = titulosOp;

    // Guardamos
    orden.save();
}