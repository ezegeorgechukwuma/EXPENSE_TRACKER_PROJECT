import { useEffect, useState } from 'react';
import axios from '../../api/axios';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import CategoryChart from '../../components/Charts/CategoryChart'; // adjust path if needed
import './Dashboard.css';

ChartJS.register(ArcElement, Tooltip, Legend);

function Dashboard() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('/transactions', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setTransactions(res.data || []);
      } catch (err) {
        console.error('Error fetching transactions:', err);
      }
    };
    fetchTransactions();
  }, []);

  const totalIncome = transactions
    .filter(tx => tx.type === 'income')
    .reduce((sum, tx) => sum + tx.amount, 0);

  const totalExpense = transactions
    .filter(tx => tx.type === 'expense')
    .reduce((sum, tx) => sum + tx.amount, 0);

  const total = totalIncome + totalExpense || 1; // avoid divide by zero
  const incomePercentage = ((totalIncome / total) * 100).toFixed(0);
  const expensePercentage = ((totalExpense / total) * 100).toFixed(0);

  const chartData = {
    labels: [`Income (${incomePercentage}%)`, `Expense (${expensePercentage}%)`],
    datasets: [
      {
        data: [totalIncome, totalExpense],
        backgroundColor: ['#22c55e', '#ef4444'],
        borderColor: ['#16a34a', '#dc2626'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        <h1 className="dashboard-title">Welcome to your Dashboard</h1>
        <p className="dashboard-subtitle">What do you want to add today?</p>
        
        {/* Main Pie Chart */}
        <div className="chart-container">
          <Doughnut data={chartData} options={{ plugins: { legend: { position: 'bottom' } } }} />
        </div>

        {/* Category-based chart below */}
        <div className="category-chart-container">
          <CategoryChart transactions={transactions} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;