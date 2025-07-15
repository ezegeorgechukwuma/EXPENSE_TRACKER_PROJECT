// components/Charts/CategoryChart.jsx
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale
} from 'chart.js';

ChartJS.register(BarElement, Tooltip, Legend, CategoryScale, LinearScale);

function CategoryChart({ transactions }) {
  // Aggregate total amount per category + type
  const categoryMap = {};

  transactions.forEach(tx => {
    if (!categoryMap[tx.category]) {
      categoryMap[tx.category] = { income: 0, expense: 0 };
    }
    if (tx.type === 'income') {
      categoryMap[tx.category].income += tx.amount;
    } else {
      categoryMap[tx.category].expense += tx.amount;
    }
  });

  const categories = Object.keys(categoryMap);
  const totals = categories.map(cat => categoryMap[cat].income + categoryMap[cat].expense);

  // For each category, decide color: green if mostly income, red if mostly expense
  const colors = categories.map(cat =>
    categoryMap[cat].income >= categoryMap[cat].expense ? '#22c55e' : '#ef4444'
  );

  const data = {
    labels: categories,
    datasets: [
      {
        label: 'Total Amount',
        data: totals,
        backgroundColor: colors,
        borderRadius: 6
      }
    ]
  };

  const options = {
    plugins: { legend: { display: false } },
    scales: { y: { beginAtZero: true } }
  };

  return (
    <div style={{ marginTop: '2rem' }}>
      <Bar data={data} options={options} />
    </div>
  );
}

export default CategoryChart;
