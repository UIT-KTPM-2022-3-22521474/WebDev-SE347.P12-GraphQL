const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  description: { type: String },
});

module.exports = mongoose.model('User', userSchema);