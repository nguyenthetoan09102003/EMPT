const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  department: String,
  createdAt: { type: Date, default: Date.now }
}, { collection: 'PD1' }); // 👈 Quan trọng: trỏ tới collection PD1

module.exports = mongoose.model('PD1', DataSchema);
