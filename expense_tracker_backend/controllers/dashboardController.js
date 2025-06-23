const Transaction = require('../models/Transaction');

exports.getDashboardSummary = async (req, res) => {
  try {
    const userId = req.user._id;

    const transactions = await Transaction.find({ user: userId });

    const summary = {
      income: 0,
      expenses: 0,
      balance: 0,
      categoryTotals: {}
    };

    transactions.forEach(tx => {
      const amt = tx.amount;

      if (tx.type === 'income') {
        summary.income += amt;
      } else {
        summary.expenses += amt;
      }

      summary.categoryTotals[tx.category] = (summary.categoryTotals[tx.category] || 0) + amt;
    });

    summary.balance = summary.income - summary.expenses;

    res.json(summary);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
