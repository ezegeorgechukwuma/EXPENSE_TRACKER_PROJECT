const Transaction = require('../models/Transaction');
const Budget = require('../models/Budget');

exports.getDashboardSummary = async (req, res) => {
  try {
    const userId = req.user._id;
    const { month } = req.query;

    // Step 1: Filter transactions (optional month filtering)
    let transactions = await Transaction.find({ user: userId });

    if (month) {
      const start = new Date(`${month}-01`);
      const end = new Date(`${month}-31`);
      transactions = transactions.filter(tx => {
        const txDate = new Date(tx.date);
        return txDate >= start && txDate <= end;
      });
    }

    // Step 2: Load budgets for this user/month
    const budgetQuery = { user: userId };
    if (month) budgetQuery.month = month;

    const budgets = await Budget.find(budgetQuery);

    // Step 3: Build actual spend summary
    const summary = {
      income: 0,
      expenses: 0,
      balance: 0,
      categories: {}
    };

    // Calculate actuals
    transactions.forEach(tx => {
      const amt = tx.amount;

      if (tx.type === 'income') {
        summary.income += amt;
      } else {
        summary.expenses += amt;
        summary.categories[tx.category] = summary.categories[tx.category] || { actual: 0 };
        summary.categories[tx.category].actual += amt;
      }
    });

    // Merge budget info
    budgets.forEach(b => {
      const cat = b.category;
      summary.categories[cat] = summary.categories[cat] || { actual: 0 };
      summary.categories[cat].budget = b.amount;

      const used = summary.categories[cat].actual || 0;
      summary.categories[cat].percentUsed = Math.round((used / b.amount) * 100);
    });

    // Final balance
    summary.balance = summary.income - summary.expenses;

    res.json(summary);

  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

exports.getMonthlyTrends = async (req, res) => {
  try {
    const userId = req.user._id;
    const { year } = req.query;

    if (!year) {
      return res.status(400).json({ msg: "Year is required" });
    }

    const start = new Date(`${year}-01-01`);
    const end = new Date(`${year}-12-31`);

    // Fetch transactions for the year
    const transactions = await Transaction.find({
      user: userId,
      date: { $gte: start, $lte: end }
    });

    // Group by month
    const monthlyData = Array.from({ length: 12 }, () => ({ income: 0, expenses: 0 }));

    transactions.forEach(tx => {
      const monthIndex = tx.date.getMonth();
      if (tx.type === 'income') {
        monthlyData[monthIndex].income += tx.amount;
      } else {
        monthlyData[monthIndex].expenses += tx.amount;
      }
    });

    res.json(monthlyData);

  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};