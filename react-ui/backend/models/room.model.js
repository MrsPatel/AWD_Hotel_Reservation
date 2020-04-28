const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//name of the scema + validations 
//trim means it will trim whitespace at the end
const userSchema = new Schema({
    room: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3
    },
  }, {
    timestamps: true,
  });
  
  const User = mongoose.model('Room', userSchema);
  
  module.exports = User;