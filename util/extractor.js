module.exports.extractor = function () {

    'use strict'

    // Imports
    let expPrcRen = require('./expPrcRen'); // Precios y Rentabilidad diaria    expansion.com
    let expAT = require('./expAT');         // Analisis Tecnico                 expansion.com
    let pcBolsaAT = require('./pcBolsaAT'); // Analisis Tecnico                 pcbolsa.com
    let infomAT = require('./infomAT');     // Analisis Tecnico                 infomercados.com 
    let bolsamAT = require('./bolsamAT');   // Analisis Tecnico                 bolsamania.com

    // Ejecucion de cargas
    expPrcRen.expPrcRen();
    expAT.expAT();
    pcBolsaAT.pcbolsaAT();
    infomAT.informAT();
    bolsamAT.bolsamAT();
}