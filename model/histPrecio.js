var mongoose = require('mongoose');

var histPrecioSchema = new mongoose.Schema({
    fecha : { type: Date },
    mercadoID : { type: String },
    ticker : { type: String },
    precio : { type: Number }
})

module.exports = mongoose.model('HistPrecio', histPrecioSchema);