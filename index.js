'use strict'

// Imports
const bd = require('./util/db');
const extractor = require('./util/extractor');
const cargas = require('./util/cargaInicial');
const broker = require('./util/broker');
const delfos = require('./util/delfos');


// Creamos conexión a base de datos
let con = bd.conectar();

// Ejecutamos la carga de alias (tickers)
//cargas.cargaInicial();

// Ejecutamos la Extracciones
//extractor.extractor();

// Prueba alta orden
//broker.operar("sistema1" , new Date() , "BME"  , "SAN" , "Compra", 2000);

// Prueba sistema 1
delfos.s1();

// Cerramos conexion y Salimos de la ejecución
//con.disconnect();
//console.log("Fin de la ejecución");
//process.exit(0);





