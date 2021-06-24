const mongoose = require('mongoose');

const AccumulatorSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    sizes: {
        type: String,
        required: true
    },
    imageUrl: {
        type: Object,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    description: {
        type: String,
        required: true
    },
    producer: {
        type: String,
        required: true
    },
    productCode: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('accumulator', AccumulatorSchema);