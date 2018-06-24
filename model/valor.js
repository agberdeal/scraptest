'use strict'

let mongoose = require('mongoose');

let valorSchema = new mongoose.Schema(
    {
        mercadoID: { type: String },
        ticker: { type: String },
        isin: { type: String },
        nombre: { type: String }
    },
    {
        collection: 'valor'
    }
)

module.exports = mongoose.model('Valor', valorSchema);
