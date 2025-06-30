import { Link } from 'react-router-dom';
import './PublicNavbar.css';

function PublicNavbar() {
  return (
    <header className="public-navbar">
      <div className="navbar-container">
        <div className="logo">
          <Link to="/">💸 Budgetify</Link>
        </div>
        <nav className="nav-links">
          <a href="#features">Features</a>
          <a href="#plans">Plans</a>
          <a href="#about">About Us</a>
          <a href="#faq">FAQ</a>
          <a href="#blog">Blog</a>
        </nav>
        <div className="nav-actions">
          <Link to="/login" className="login-btn">Login</Link>
          {/* <button onClick={onLoginClick} className="login-btn">Login</button> */}
          <Link to="/register" className="cta-btn">Get Started</Link>
        </div>
      </div>
    </header>
  );
}

export default PublicNavbar;
// This component renders the public navigation bar for the application.
// It includes links to various sections of the site and buttons for login and registration.