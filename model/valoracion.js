'use strict'

let mongoose = require('mongoose');

let valoracionSchema = new mongoose.Schema(
    {
        fecha: { type: Date },
        mercadoID: { type: String },
        ticker: { type: String },
        origenID: { type: String },
        marcadorID: { type: String },
        valor: { type: String }
    },
    {
        collection: 'mercado'
    }
);

module.exports = mongoose.model('Valoracion', valoracionSchema);
