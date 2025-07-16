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

  // Calculate total amount across all categories
  const grandTotal = totals.reduce((sum, amount) => sum + amount, 0);

  // Calculate percentages for each category
  const percentages = totals.map(amount => 
    grandTotal > 0 ? ((amount / grandTotal) * 100).toFixed(1) : 0
  );

  // Create labels with percentages
  const labelsWithPercentages = categories.map((cat, index) => 
    `${cat} (${percentages[index]}%)`
  );

  // For each category, decide color: green if mostly income, red if mostly expense
  const colors = categories.map(cat =>
    categoryMap[cat].income >= categoryMap[cat].expense ? '#22c55e' : '#ef4444'
  );

  const data = {
    labels: labelsWithPercentages,
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
    plugins: { 
      legend: { display: false },
      tooltip: {
        callbacks: {
          title: function() {
            return ''; // Remove the title to avoid duplication
          },
          label: function(context) {
            const category = categories[context.dataIndex];
            const amount = context.parsed.y;
            const percentage = percentages[context.dataIndex];
            return `${category}: ${amount} (${percentage}%)`;
          }
        }
      }
    },
    scales: { 
      y: { beginAtZero: true },
      x: {
        ticks: {
          maxRotation: 45,
          minRotation: 45
        }
      }
    }
  };

  return (
    <div style={{ marginTop: '2rem' }}>
      <Bar data={data} options={options} />
    </div>
  );
}

export default CategoryChart;