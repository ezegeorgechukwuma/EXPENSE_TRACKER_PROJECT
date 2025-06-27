import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import AddTransaction from './pages/Transactions/AddTransaction';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import Dashboard from './pages/Dashboard/Dashboard';
import Navbar from './components/Navbar/Navbar';
// import { useContext } from 'react';
// import { AuthContext } from './context/AuthContext';


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
   
      <Navbar />
      <Routes>
  <Route path="/" element={<Navigate to="/login" />} />
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
</Routes>

      </div>
    </Router>
  );
}

export default App;
// This is the main entry point of the application.
