const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const classFeaturesSchema = new Schema({
    id: Number,
    className: String,
    source: String,
    featureName: String,
    decisionRequired: Number,
    level: Number,
    levelsReceived: Schema.Types.Mixed,
    desc: String,
    decisionType: String,
    skillIds: Array,
    scaledBonus: Array
});

module.exports = mongoose.model('classFeatures', classFeaturesSchema, 'classFeatures');