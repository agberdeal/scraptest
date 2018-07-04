module.exports.extractor = function () {

    'use strict'

    // Imports
    let expPrcRen = require('./extraction/expPrcRen'); // Precios y Rentabilidad diaria    expansion.com
    let expAT = require('./extraction/expAT');         // Analisis Tecnico                 expansion.com
    let pcBolsaAT = require('./extraction/pcBolsaAT'); // Analisis Tecnico                 pcbolsa.com
    let infomAT = require('./extraction/infomAT');     // Analisis Tecnico                 infomercados.com 
    let bolsamAT = require('./extraction/bolsamAT');   // Analisis Tecnico                 bolsamania.com

    // Ejecucion de cargas
    expPrcRen.expPrcRen();
    expAT.expAT();
    pcBolsaAT.pcbolsaAT();
    infomAT.informAT();
    bolsamAT.bolsamAT();
}