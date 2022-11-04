const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workshopSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    venue: {
        type: String,
        required: false
    },
    date: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: false
    }
}, { timestamps: true })

module.exports = mongoose.model('Workshop', workshopSchema)