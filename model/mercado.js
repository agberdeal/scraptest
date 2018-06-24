'use strict'

let mongoose = require('mongoose');

let mercadoSchema = new mongoose.Schema(
    {
        mercadoID: { type: String },
        nombre: { type: String },
        pais: { type: String },
    },
    {
        collection: 'mercado'
    }
)

module.exports = mongoose.model('Mercado', mercadoSchema); 
