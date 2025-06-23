const express = require('express');
const { getDashboardSummary } = require('../controllers/dashboardController');
const protect = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', protect, getDashboardSummary);

module.exports = router;
