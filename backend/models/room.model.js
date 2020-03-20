const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const roomSchema = new Schema({
    roomID: {type: Number, required: true, unique: true,trim: true},
    hotelID: {type: Number, required: true},
    roomType: {type: String, require: true},
    roomRate: {type: Number, require: true}, 
    maxPeople: {type: Number, require: true},
}, {
    timestamps: true,
});

const room = mongoose.model('guest', roomSchema);

module.exports = room;