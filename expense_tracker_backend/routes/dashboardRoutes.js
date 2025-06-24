const express = require('express');
const { getDashboardSummary, getMonthlyTrends } = require('../controllers/dashboardController');
const protect = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', protect, getDashboardSummary);
router.get('/trends', protect, getMonthlyTrends);
   
module.exports = router;
