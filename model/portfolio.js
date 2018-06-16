var mongoose = require('mongoose');

var portfolio = new mongoose.Schema({
    fecha : { type: date , index: true},
    mercadoID : { type: string , index: true},
    ticker : { type: string , index: true},
    posicion : { type: Number }
})