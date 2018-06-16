var mongoose = require('mongoose');

var marcador = new mongoose.Schema({
    origenID : { type: text, index: true },
    marcadorID : { type: text, index: true },
    descripcion : { type: text }
})