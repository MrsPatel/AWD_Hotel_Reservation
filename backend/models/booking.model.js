const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookingSchema = new Schema({
    bookingID: {type: Number, required: true, unique: true,trim: true},
    guestID: {type: Number, trim: true},
    roomID: {type: String, required: true},
    checkIn: {type: Date, required: true},
    checkOut: {type: Date, required: true},
    persons: {type: Number, required: true},
    priceTotal: {type: Number, required: true},
}, {
    timestamps: true,
});

const booking = mongoose.model('Booking', bookingSchema);

module.exports = booking; 