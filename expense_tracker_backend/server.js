require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const authRoutes = require('./routes/authRoutes');
const transactionRoutes = require('./routes/transactionRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');


const app = express();
app.use(cors());
app.use(express.json());

// Routes
//authentication routes
app.use('/api/auth', authRoutes);
//transaction routes
app.use('/api/transactions', transactionRoutes);
//dashboard routes
app.use('/api/dashboard', dashboardRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("✅ Connected to MongoDB");
  app.listen(process.env.PORT, () => {
    console.log(`🚀 Server running on port ${process.env.PORT}`);
  });
})
.catch((err) => {
  console.error("❌ MongoDB connection error:", err.message);
});
