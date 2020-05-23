const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const classAbilitiesSchema = new Schema({
    id: Number,
    className: String,
    featureName: String,
    optionName: String,
    source: String,
    level: Number,
    desc: String
});

module.exports = mongoose.model('classAbilities', classAbilitiesSchema, 'classAbilities');