import { useState } from 'react';
import axios from '../../api/axios';

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
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
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
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded mt-10">
      <h2 className="text-2xl font-bold mb-4">Add Transaction</h2>
      <form onSubmit={handleSubmit}>
        <select
          className="w-full mb-3 p-2 border"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>

        <input
          type="number"
          className="w-full mb-3 p-2 border"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />

        <input
          type="text"
          className="w-full mb-3 p-2 border"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />

        <input
          type="text"
          className="w-full mb-3 p-2 border"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          type="date"
          className="w-full mb-3 p-2 border"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />

        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransaction;
