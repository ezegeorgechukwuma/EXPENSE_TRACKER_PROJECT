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
