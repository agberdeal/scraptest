var mongoose = require('mongoose');

var valorSchema = new mongoose.Schema({
    mercadoID : { type: String },
    ticker : { type: String },
    isin : { type: String },
    nombre : { type: String }
})

module.exports = mongoose.model('Valor', valorSchema);
