const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const classDescSchema = new Schema({
    className: String,
    Source: String,
    description: String,
    keyABDesc: String,
    classFeatures: Object,
    classData: Object,
});

module.exports = mongoose.model('classDescriptions', classDescSchema, 'classDescriptions');