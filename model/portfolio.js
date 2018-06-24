'use strict'

let mongoose = require('mongoose');

let portfolioSchema = new mongoose.Schema(
    {
        id: { type: Number },
        nombre: { type: String },
        valores: {
            fecha: { type: Date },
            mercadoID: { type: String },
            ticker: { type: String },
            posicion: { type: Number }
        }
    },
    {
        collection: 'mercado'
    }
)

module.exports = mongoose.model('Portfolio', portfolioSchema);
