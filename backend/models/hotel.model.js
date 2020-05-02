const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const hotelSchema = new Schema({
    hotelPhone: {
        type: String,
        require: true
    },
    location: {
        type: String,
        require: true
    },
    hotelEmail: {
        type: String,
        require: true
    },
}, {
    timestamps: true,
});

const Hotel = mongoose.model('Hotel', hotelSchema);

module.exports = Hotel;