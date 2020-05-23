const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const proficienciesSchema = new Schema({
    id: Number,
    profName: String,
    profType: String
});

module.exports = mongoose.model('proficiencies', proficienciesSchema, 'proficiencies');