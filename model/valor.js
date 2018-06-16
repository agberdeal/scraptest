var mongoose = require('mongoose');

var valor = new mongoose.Schema({
    mercadoID : { type: string , index: true},
    ticker : { type: string , index: true},
    isin : { type: string },
    nombre : { type: string }
})