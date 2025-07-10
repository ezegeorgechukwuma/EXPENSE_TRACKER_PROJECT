const Transaction = require('../models/Transaction');

exports.createTransaction = async (req, res) => {
  try {
    const { type, category, amount, description, date } = req.body;

    const newTransaction = await Transaction.create({
      user: req.user._id,
      type,
      category,
      amount,
      description,
      date
    });

    res.status(201).json(newTransaction);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

exports.getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find({ user: req.user._id }).sort({ date: -1 });
    res.json(transactions);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

// PUT /api/transactions/:id
exports.updateTransaction = async (req, res) => {
  const { type, category, amount, description, date } = req.body;

  try {
    const transaction = await Transaction.findOneAndUpdate(
      { _id: req.params.id, user: req.user._id }, // Ensure user owns it
      { type, category, amount, description, date },
      { new: true } // return the updated document
    );

    if (!transaction) {
      return res.status(404).json({ msg: 'Transaction not found' });
    }

    res.json({ msg: 'Transaction updated successfully', transaction });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

// DELETE /api/transactions/:id
exports.deleteTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.findOneAndDelete({
      _id: req.params.id,
      user: req.user._id, // Ensure user can only delete their own transactions
    });

    if (!transaction) {
      return res.status(404).json({ msg: 'Transaction not found' });
    }

    res.json({ msg: 'Transaction deleted successfully' });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
