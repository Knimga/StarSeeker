const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const raceDescSchema = new Schema({
    raceName: String,
    Source: String,
    description: String,
    ASDesc: String,
    sizeType: String,
    racialAbilities: Object,
    raceData: Object,
    decisions: Object
});

module.exports = mongoose.model('raceDescriptions', raceDescSchema, 'raceDescriptions');