var mongoose = require('mongoose');

var mercado = new mongoose.Schema({
    mercadoID : { type: string , index: true},
    nombre : { type: string },
    pais : { type: string },
})