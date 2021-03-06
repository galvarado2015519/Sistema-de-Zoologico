'user strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var animalSchema = Schema({
    name: String,
    nickname: String,
    age: Number,
    image: String,
    carer: [{ type: Schema.Types.ObjectId, ref: 'user'}]
});

module.exports = mongoose.model('animal', animalSchema);