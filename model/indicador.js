'use strict'

let mongoose = require('mongoose');

let indicadorSchema = new mongoose.Schema(
    {
        fecha: { type: Date },
        mercadoID: { type: String },
        ticker: { type: String },
        origenID: { type: String },
        indicadorID: { type: String },
        señal: { type: String },
        comentario: { type: String },
        valorAnerior: { type: String },
        valorActual: { type: String },

    },
    {
        collection: 'indicador'
    }
);

module.exports = mongoose.model('Valoracion', indicadorSchema);
