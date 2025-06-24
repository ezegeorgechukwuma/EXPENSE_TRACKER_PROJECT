const Budget = require('../models/Budget');

exports.setBudget = async (req, res) => {
  const { category, amount, month } = req.body;

  try {
    const existing = await Budget.findOne({ user: req.user._id, category, month });

    if (existing) {
      existing.amount = amount;
      await existing.save();
      return res.json({ msg: "Budget updated", budget: existing });
    }

    const budget = await Budget.create({
      user: req.user._id,
      category,
      amount,
      month
    });

    res.status(201).json(budget);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

exports.getBudgets = async (req, res) => {
  const { month } = req.query;

  try {
    const query = { user: req.user._id };
    if (month) query.month = month;

    const budgets = await Budget.find(query);
    res.json(budgets);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

// This code defines the budget controller for an expense tracker application.
// It includes functions to set or update a budget, retrieve budgets, and delete a budget.  

exports.deleteBudget = async (req, res) => {
  const { id } = req.params;

  try {
    const budget = await Budget.findById(id);
    if (!budget || budget.user.toString() !== req.user._id.toString()) {
      return res.status(404).json({ msg: "Budget not found" });
    }

    await Budget.deleteOne({ _id: id });
    console.log("Budget deleted successfully.");
    res.json({ msg: "Budget deleted" });
  } catch (err) {
    console.error("Error deleting budget:", err.message);
    res.status(500).json({ msg: err.message });
  }
};