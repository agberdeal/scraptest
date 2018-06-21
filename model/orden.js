var mongoose = require('mongoose');

var ordenSchema = new mongoose.Schema({
    fecha : { type: Date },
    mercadoID : { type: String },
    ticker : { type: String },
    tipo : { type: String }, // Tipo: C:Compra, V:Venta
    importe : { type: Number },
    acciones : { typer: Number }
})

module.exports = mongoose.model('Orden', ordenSchema);

