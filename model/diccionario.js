'use strict'

let mongoose = require('mongoose');

let diccionarioSchema = new mongoose.Schema(
    {
        tipo : { type: String },
        origen : { type: String },
        tag : { type: String },
        valor : { type: String }
    },
    { 
        collection: 'diccionario' 
    }
);

module.exports = mongoose.model('Diccionario', diccionarioSchema);