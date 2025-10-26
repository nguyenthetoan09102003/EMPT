const mongoose = require("mongoose");
const checklistSchema = new mongoose.Schema({
machineName: { type: String, required: true },
  comment: { type: String },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('PD1', checklistSchema, 'PD1');