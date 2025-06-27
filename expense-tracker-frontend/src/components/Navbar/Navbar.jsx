import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-green-700">💸 Expense Tracker</h1>

      {user && (
        <div className="flex items-center gap-6">
          <Link to="/dashboard" className="text-gray-800 hover:text-green-600">Dashboard</Link>
          <Link to="/add-transaction" className="text-gray-800 hover:text-green-600">Add Transaction</Link>
          <button onClick={handleLogout} className="text-red-600 font-medium hover:underline">
            Logout
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
// This is the Navbar component for the application.
// It displays the application title and navigation links.