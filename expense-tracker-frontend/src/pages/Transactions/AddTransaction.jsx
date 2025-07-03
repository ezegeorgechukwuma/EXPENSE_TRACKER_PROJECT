import { useState } from 'react';
import axios from '../../api/axios';
import './AddTransaction.css'; // 👈 Import the new CSS

function AddTransaction() {
  const [type, setType] = useState('expense');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post(
        '/transactions',
        { type, amount, category, description, date },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      alert('Transaction added successfully!');
      setAmount('');
      setCategory('');
      setDescription('');
      setDate('');
    } catch (err) {
      alert(err.response?.data?.msg || 'Error adding transaction');
    }
  };

  return (
    <div className="transaction-wrapper">
      <div className="transaction-container">
        <h2>Add Transaction</h2>
        <form onSubmit={handleSubmit}>
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>

          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />

          <button type="submit">Add Transaction</button>
        </form>
      </div>
    </div>
  );
}

export default AddTransaction;
