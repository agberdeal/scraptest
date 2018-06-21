var mongoose = require('mongoose');

var valoracionSchema = new mongoose.Schema({
    fecha : { type: Date },
    mercadoID : { type: String },
    ticker : { type: String },
    origenID : { type: String },
    marcadorID : { type: String },
    valor : { type: String }
})

module.exports = mongoose.model('Valoracion', valoracionSchema);
