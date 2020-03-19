const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookingSchema = new Schema({
    bookingID: {type: Number, required: true, unique: true,trim: true},
    guestID: {type: Number, unique: true,trim: true},
    checkIn: {type: Date, required: true},
    checkOut: {type: Date, required: true},
    persons: {type: Number, required: true},
    priceTotal: {type: Number, required: true},
}, {
    timestamp: true,
});

const booking = mongoose.model('guest', bookingSchema);

module.exports = booking; 