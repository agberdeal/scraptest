var mongoose = require('mongoose');

var histRentabilidadSchema = new mongoose.Schema({
    fecha : { type: Date },
    mercadoID : { type: String },
    ticker : { type: String },
    rentabilidad : { type: Number }
})

module.exports = mongoose.model('HistRentabilidad', histRentabilidadSchema);
