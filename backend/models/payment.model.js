const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const paymentSchema = new Schema({
    roomCharges: {type: Number, required: true, trim: true},
    bookingID: {type: String, require: true, trim: true},
    paid: {type: String, require: true, trim: true}
}, {
  timestamps: true,
});

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;