var mongoose = require('mongoose');

var aliasSchema = new mongoose.Schema({
    tag : { type: String },
    ticker : { type: String }
})

module.exports = mongoose.model('Alias', aliasSchema);