const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  gender: {
    type: String,
    enum: ['male', 'female'],
  },
  birthday: {
    type: Date,
  },
  isAdult: {
    type: Boolean,
  },
  workExp: {
    type: Number,
    min: 0,
  },
});

const User = mongoose.model('User', userSchema);
module.exports = User;
