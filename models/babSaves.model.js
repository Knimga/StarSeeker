const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const babSavesSchema = new Schema({
    name: String,
    bonuses: Array
});

module.exports = mongoose.model('babSaves', babSavesSchema, 'babSaves');