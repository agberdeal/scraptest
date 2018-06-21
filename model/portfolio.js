var mongoose = require('mongoose');

var portfolioSchema = new mongoose.Schema({
    id : { type : Number },
    nombre : { type : String },
    valores : {
        fecha : { type: Date },
        mercadoID : { type: String },
        ticker : { type: String },
        posicion : { type: Number }
    }
})

module.exports = mongoose.model('Portfolio', portfolioSchema);
