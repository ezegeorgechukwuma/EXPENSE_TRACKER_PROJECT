import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import './AppNavbar.css'; // 👉 custom CSS

// also note the design is also using boot strapp desing.. you can turn it off in main.jsx if you want to use your own design

const AppNavbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="app-navbar">
      <Link to="/dashboard" className="navbar-brand" style={{ color: 'green' }}>💸 Budgetify</Link>
      
      {user && (
        <div className="navbar-links">
          <Link to="/dashboard" className="nav-link">Dashboard</Link>
          <Link to="/add-transaction" className="nav-link">Add Transaction</Link>
          <Link to="/transaction-list" className="nav-link">Transactions List</Link>
          <button onClick={handleLogout} className="logout-button">
            Logout
          </button>
        </div>
      )}
    </nav>
  );
};

export default AppNavbar;
