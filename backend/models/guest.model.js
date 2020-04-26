const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const guestSchema = new Schema({
    firstName: {type: String, required: true, trim: true},
    lastName: {type: String, require: true, trim: true},
    phone: {type: String, require: true, trim: true}, 
    email: {type: String, require: true, trim: true},
    city: {type: String, require: true, trim: true},
    state: {type: String, require: true, trim: true},
    zip: {type: String, require: true, trim: true},
}, {
    timestamps: true,
});

const Guest = mongoose.model('Guest', guestSchema);

module.exports = Guest; 