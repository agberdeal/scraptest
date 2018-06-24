'use strict'

let mongoose = require('mongoose');

let ordenSchema = new mongoose.Schema(
    {
        fecha: { type: Date },
        mercadoID: { type: String },
        ticker: { type: String },
        tipo: { type: String }, // Tipo: C:Compra, V:Venta
        importe: { type: Number },
        acciones: { typer: Number }
    },
    {
        collection: 'orden'
    })

module.exports = mongoose.model('Orden', ordenSchema);

