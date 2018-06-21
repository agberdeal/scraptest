var mongoose = require('mongoose');

var mercadoSchema = new mongoose.Schema({
    mercadoID : { type: String },
    nombre : { type: String },
    pais : { type: String },
})

module.exports = mongoose.model('Mercado', mercadoSchema); 
