const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const paymentSchema = new Schema({
    roomCharges: {type: Number, required: true, trim: true},
    bookingID: {type: Number, require: true, trim: true},
}, {
  timestamps: true,
});

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;