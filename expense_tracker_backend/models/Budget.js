const mongoose = require('mongoose');

const budgetSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  category: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  month: {
    type: String, // Format: YYYY-MM
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Budget', budgetSchema);
