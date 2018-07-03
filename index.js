'use strict'

// Imports
const bd = require('./util/db');
const extractor = require('./util/extractor');
const cargas = require('./util/cargaInicial');

// Creamos conexxion a BBDD
let con = bd.conectar();

// Ejecutamos la carga de alias (tickers)
//cargas.carga1();

// Ejecutamos la Extracciones
extractor.extractor();