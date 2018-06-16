var mongoose = require('mongoose');

var histPrecio = new mongoose.Schema({
    fecha : { type: date , index: true},
    mercadoID : { type: string , index: true},
    ticker : { type: string , index: true},
    precio : { type: Number }
})