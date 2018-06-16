var mongoose = require('mongoose');

var histRentabilidad = new mongoose.Schema({
    fecha : { type: date , index: true},
    mercadoID : { type: string , index: true},
    ticker : { type: string , index: true},
    rentabilidad : { type: Number }
})