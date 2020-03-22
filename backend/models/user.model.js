const mongoose = require('mongoose');
//New mongoose schema
const Schema = mongoose.Schema;

//name of the scema + validations 
//trim means it will trim whitespace at the end
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;