const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookingSchema = new Schema({
    room: {type: String, required: true},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    phone: {type: String, required: true},
    email: {type: String, required: true},
    checkIn: {type: Date, required: true, trim: true},
    checkOut: {type: Date, required: true, trim: true},
}, {
    timestamps: true,
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking; 