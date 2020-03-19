const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const hotelSchema = new Schema({
    hotelID: {type: Number, required: true, unique: true,trim: true},
    streetAddress: {type: String, required: true},
    city: {type: String, require: true},
    state: {type: String, require: true}, 
    zip: {type: String, require: true},
    hotelPhone: {type: String, require: true}, 
    hotelEmail: {type: String, require: true}, 
}, {
    timestamp: true,
});

const hotel = mongoose.model('guest', hotelSchema);

module.exports = hotel; 