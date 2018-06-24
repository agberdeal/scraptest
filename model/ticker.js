'use strict'

let mongoose = require('mongoose');

let tickerSchema = new mongoose.Schema(
    {
        tag: { type: String },
        ticker: { type: String }
    },
    { 
        collection: 'ticker' 
    }
);

module.exports = mongoose.model('Ticker', tickerSchema);