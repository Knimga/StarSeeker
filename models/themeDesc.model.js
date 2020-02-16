const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const themeDescSchema = new Schema({
    themeName: String,
    Source: String,
    description: String,
    ASDesc: String,
    themeAbilities: Object,
    themeData: Object,
    decisions: Object
});

module.exports = mongoose.model('themeDescriptions', themeDescSchema, 'themeDescriptions');