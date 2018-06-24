'use strict'

let mongoose = require('mongoose');

let histRentabilidadSchema = new mongoose.Schema(
    {
        fecha: { type: Date },
        mercadoID: { type: String },
        ticker: { type: String },
        rentabilidad: { type: Number }
    },
    {
        collection: 'histRentabilidad'
    }
)

module.exports = mongoose.model('HistRentabilidad', histRentabilidadSchema);
