'use strict'

let mongoose = require('mongoose');

let histPrecioSchema = new mongoose.Schema(
    {
        fecha: { type: Date },
        mercadoID: { type: String },
        ticker: { type: String },
        precio: { type: Number }
    },
    {
        collection: 'histPrecio'
    }
)

module.exports = mongoose.model('HistPrecio', histPrecioSchema);