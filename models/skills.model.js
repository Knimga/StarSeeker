const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const skillsSchema = new Schema({
    skillId: Number,
    skillName: String,
    ASName: String,
    ASIndex: Number,
    untrained: Boolean
});

module.exports = mongoose.model('skills', skillsSchema, 'skills');