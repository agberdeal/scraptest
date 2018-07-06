'use strict'

// Imports
const bd = require('./util/db');
const extractor = require('./util/extractor');
const cargas = require('./util/cargaInicial');
const broker = require('./util/broker');
const delfos = require('./util/delfos');

// Creamos conexion a BBDD
let con = bd.conectar();

// Ejecutamos la carga de alias (tickers)
//cargas.cargaInicial();

// Ejecutamos la Extracciones
//extractor.extractor();

// Prueba alta orden
//broker.operar("sistema1" , new Date() , "BME"  , "SAN" , "Compra", 2000);

// Prueba sistema 1
delfos.s1();


