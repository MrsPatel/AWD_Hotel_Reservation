const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const guestSchema = new Schema({
    guestID: {type: Number, required: true, unique: true,trim: true},
    firstName: {type: String, required: true},
    lastName: {type: String, require: true},
    phone: {type: String, require: true}, 
    email: {type: String, require: true},
}, {
    timestamps: true,
});

const guest = mongoose.model('Guest', guestSchema);

module.exports = guest; 