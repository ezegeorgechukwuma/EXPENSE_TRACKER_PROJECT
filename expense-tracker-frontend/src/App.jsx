import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import AddTransaction from './pages/Transactions/AddTransaction';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import Dashboard from './pages/Dashboard/Dashboard';
import Navbar from './components/Navbar/AppNavbar';
import './components/Navbar/AppNavbar.css'; // Custom CSS for Navbar
import Landing from './pages/Landing/Landing';
import TransactionList from './pages/TransactionList/TransactionList';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="main-content">
      <main style={{ minHeight: '100vh', overflowY: 'auto' }}>
        <Routes>
          <Route path="/" element={<Landing />} />   
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/add-transaction"
            element={
              <ProtectedRoute>
                <AddTransaction />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        <Route
            path="/transaction-list"
            element={
              <ProtectedRoute>
                  <TransactionList />
              </ProtectedRoute>
            }
          />
          </Routes>
          </main>
        </div>
    </Router>
  );
}

export default App;
// This is the main application component that sets up the routing and renders the Navbar.
// It uses React Router for navigation and Bootstrap for styling.
// The ProtectedRoute component ensures that only authenticated users can access certain routes.