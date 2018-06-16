var mongoose = require('mongoose');

var orden = new mongoose.Schema({
    fecha : { type: date , index: true},
    mercadoID : { type: string , index: true},
    ticker : { type: string , index: true},
    tipo : { type: String }, // Tipo: C:Compra, V:Venta
    importe : { type: Number },
    acciones : { typer: Number }
})