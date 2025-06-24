const express = require('express');
const { setBudget, getBudgets, deleteBudget } = require('../controllers/budgetController');
const protect = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', protect, setBudget);     // Set or update budget
router.get('/', protect, getBudgets);     // Get budgets (optionally filter by month)
router.delete('/:id', protect, deleteBudget); // Delete a budget (not defined in the original code, but added for completeness)

module.exports = router;
// This file defines the routes for budget-related operations in the expense tracker application.
// It includes routes to set or update a budget and to retrieve budgets, with user authentication middleware applied.