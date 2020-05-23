const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const classesSchema = new Schema({
    className: String,
    source: String,
    desc: String,
    keyABDesc: String,
    stamina: Number,
    hp: Number,
    keyASIndex: Number,
    skills: Array,
    skillRanksPerLvl: Number,
    armorProf: Array,
    weapProf: Array,
    bab: Number,
    fort: Number,
    ref: Number,
    will: Number
});

module.exports = mongoose.model('classes', classesSchema, 'classes');