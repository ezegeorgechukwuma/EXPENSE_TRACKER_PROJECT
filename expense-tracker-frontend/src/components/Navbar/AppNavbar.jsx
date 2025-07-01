import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import './AppNavbar.css'; // 👉 custom CSS

const AppNavbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="app-navbar">
      <div className="navbar-container">
        <Link to className="navbar-brand">💸 Budgetify</Link>

        {user && (
          <div className="navbar-links">
            <Link to="/dashboard" className="nav-link">Dashboard</Link>
            <Link to="/add-transaction" className="nav-link">Add Transaction</Link>
            <button onClick={handleLogout} className="logout-button">
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default AppNavbar;
