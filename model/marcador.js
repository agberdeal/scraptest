'use strict'

let mongoose = require('mongoose');

let marcadorSchema = new mongoose.Schema(
    {
        origenID: { type: String, },
        marcadorID: { type: String },
        descripcion: { type: String }
    },
    {
        collection: 'marcador'
    }
)

module.exports = mongoose.model('Marcador', marcadorSchema);