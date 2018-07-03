'use strict'

// Imports
const events = require('events');
const emitter = events.EventEmitter;

const bd = require('./util/db');
const metodos = require('./util/e1');
const cargas = require('./util/carga1');

// Creamos conexxion a BBDD
let con = bd.conectar();

// Evento para detectar fin de ejecución
let em = new emitter();

em.addListener('END-C2', function (data) {
    console.log('Carga finalizada! lanzamos carga de precios!')

    // Ejecutamos la extraccion de precios y rentabilidades del dia
    metodos.e1(em);
});

em.addListener('END-E1', function (data) {
    console.log('Fin detectado, cerramos recursos y salimos.')

    // Desconexion de BBDD
    bd.desconectar(con);

    // Salimos de la aplicacion
    return process.exit(0);
});

// Ejecutamos la carga de alias (tickers)
cargas.carga1(em);

/**
 * function(res){
            
    console.log("Carga finalizada.");
    //Al finalizar la última inserción lanzamos evento de fin de proceso.
    setTimeout(function(){
        em.emit('END-C2','Fin de proceso!');
    }
    , 3000); // Esperamos 3 segundos            
}*/


