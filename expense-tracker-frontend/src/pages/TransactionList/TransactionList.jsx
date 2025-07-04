import { useEffect, useState } from 'react';
import axios from '../../api/axios';
import  './TransactionList.css';

function TransactionList() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('/transactions', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setTransactions(res.data|| []); // safe access
      } catch (err) {
        console.error('❌ Error fetching transactions:', err);
        setError('Failed to load transactions.');
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  if (loading) return <p className="loading">Loading transactions...</p>;
  if (error) return <p className="error">{error}</p>;
  if (transactions.length === 0) return <p className="empty">No transactions found.</p>;

  return (
    <div className="transaction-list-container">
      <h3>Recent Transactions</h3>
      <ul className="transaction-list">
        {transactions.map((tx) => (
          <li key={tx._id} className={`transaction-item ${tx.type}`}>
            <div className="left">
              <strong>{tx.category}</strong>
              <p>{tx.description}</p>
              <small>{new Date(tx.date).toLocaleDateString()}</small>
            </div>
            <div className="right">
              <span>{tx.type === 'income' ? '+' : '-'}₦{tx.amount}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;
