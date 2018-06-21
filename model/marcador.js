var mongoose = require('mongoose');

var marcadorSchema = new mongoose.Schema({
    origenID : { type: String, },
    marcadorID : { type: String },
    descripcion : { type: String }
})

module.exports = mongoose.model('Marcador', marcadorSchema);