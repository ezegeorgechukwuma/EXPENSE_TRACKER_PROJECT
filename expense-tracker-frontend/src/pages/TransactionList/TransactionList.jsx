import { useEffect, useState } from 'react';
import axios from '../../api/axios';
import './TransactionList.css';

function TransactionList() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const [filterType, setFilterType] = useState('all');
  const [sortOrder, setSortOrder] = useState('newest'); // newest or oldest

  const [editingId, setEditingId] = useState(null);
  const [editedTx, setEditedTx] = useState({});

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('/transactions', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setTransactions(res.data || []);
      } catch (err) {
        console.error('❌ Error fetching transactions:', err);
        setError('Failed to load transactions.');
      } finally {
        setLoading(false);
      }
    };
    fetchTransactions();
  }, []);

  // Delete transaction
  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this transaction?')) return;
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`/transactions/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTransactions(prev => prev.filter(tx => tx._id !== id));
    } catch (err) {
      console.error('❌ Error deleting transaction:', err);
      alert('Failed to delete transaction.');
    }
  };

  // Start editing
  const startEditing = (tx) => {
    setEditingId(tx._id);
    setEditedTx({
      category: tx.category,
      description: tx.description,
      amount: tx.amount,
      date: tx.date.split('T')[0], // get YYYY-MM-DD
    });
  };

  // Save edits
 // Save edits - Final fix
const handleEditSave = async (id) => {
  try {
    const token = localStorage.getItem('token');
    await axios.put(`/transactions/${id}`, editedTx, {
      headers: { Authorization: `Bearer ${token}` },
    });
    
    // Update the transactions state with the edited data
    setTransactions(prev => prev.map(tx => {
      if (tx._id === id) {
        return {
          ...tx, // Keep original transaction data
          ...editedTx, // Override with edited values
          date: editedTx.date + 'T00:00:00.000Z', // Ensure proper date format
          _id: id // Ensure ID is preserved
        };
      }
      return tx;
    }));
    
    // Clear editing state
    setEditingId(null);
    setEditedTx({});
  } catch (err) {
    console.error('❌ Error editing transaction:', err);
    alert('Failed to update transaction.');
  }
};

  // Cancel editing
  const cancelEditing = () => {
    setEditingId(null);
    setEditedTx({});
  };

  // Filter & sort
  const filtered = transactions
    .filter(tx => filterType === 'all' || tx.type === filterType)
    .sort((a, b) => {
      if (sortOrder === 'newest') {
        return new Date(b.date) - new Date(a.date);
      }
      return new Date(a.date) - new Date(b.date);
    });

  if (loading) return <p className="loading">Loading transactions...</p>;
  if (error) return <p className="error">{error}</p>;
  if (filtered.length === 0) return <p className="empty">No transactions found.</p>;

  return (
    <div className="transaction-list-wrapper">
      <div className="transaction-list-container">
        <h3>Recent Transactions</h3>

        {/* Filter & sort controls */}
        <div className="controls">
          <select value={filterType} onChange={(e) => setFilterType(e.target.value)}>
            <option value="all">All</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
          <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
            <option value="newest">Newest first</option>
            <option value="oldest">Oldest first</option>
          </select>
        </div>

        <ul className="transaction-list">
          {filtered.map((tx) => (
            <li key={tx._id} className={`transaction-item ${tx.type}`}>
              {editingId === tx._id ? (
                <>
                  <div className="left">
                    <input
                      type="text"
                      value={editedTx.category}
                      onChange={(e) => setEditedTx({...editedTx, category: e.target.value})}
                    />
                    <input
                      type="text"
                      value={editedTx.description}
                      onChange={(e) => setEditedTx({...editedTx, description: e.target.value})}
                    />
                    <input
                      type="date"
                      value={editedTx.date}
                      onChange={(e) => setEditedTx({...editedTx, date: e.target.value})}
                    />
                  </div>
                  <div className="right">
                    <input
                      type="number"
                      value={editedTx.amount}
                      onChange={(e) => setEditedTx({...editedTx, amount: e.target.value})}
                    />
                    <button onClick={() => handleEditSave(tx._id)}>💾</button>
                    <button onClick={cancelEditing}>❌</button>
                  </div>
                </>
              ) : (
                <>
                  <div className="left">
                    <strong>{tx.category}</strong>
                    <p>{tx.description}</p>
                    <small>{new Date(tx.date).toLocaleDateString()}</small>
                  </div>
                  <div className="right">
                    <span>{tx.type === 'income' ? '+' : '-'}₦{tx.amount}</span>
                    <button onClick={() => startEditing(tx)}>✏️</button>
                    <button className="delete-btn" onClick={() => handleDelete(tx._id)}>🗑️</button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TransactionList;
// Note: Ensure you have the necessary CSS styles in TransactionList.css
// to style the transaction list, controls, and buttons appropriately.