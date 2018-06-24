'use strict'

// Imports
const events = require('events');
const emitter = events.EventEmitter;

const bd = require('./util/db');
const metodos2 = require('./util/eat1');
const cargas = require('./util/carga1');

// Evento para detectar fin de ejecución
let em = new emitter();

em.addListener('END-C2', function (data) {
    console.log('Carga finalizada! lanzamos carga de precios!')

});

// Creamos conexxion a BBDD
bd.conectar();

// Ejecutamos la carga de alias (tickers)
//cargas.carga1(em);

// Carga analis tecnico
metodos2.eat1(em);


