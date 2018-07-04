'use strict'

let mongoose = require('mongoose');

let posicionSchema = new mongoose.Schema(
    {
        portfolioID: { type: String },
        fecha: { type: Date },
        mercadoID: { type: String },
        ticker: { type: String },
        titulos: { type: Number }
    },
    {
        collection: 'posicion'
    }
)

module.exports = mongoose.model('Posicion', posicionSchema);
