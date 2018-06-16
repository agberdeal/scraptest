var mongoose = require('mongoose');

var valoracion = new mongoose.Schema({
    fecha : { type: date , index: true},
    mercadoID : { type: string , index: true},
    ticker : { type: string , index: true},
    origenID : { type: text , index: true },
    marcadorID : { type: text , index: true },
    valor : { type: text }
})