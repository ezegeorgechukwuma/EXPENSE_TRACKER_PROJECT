import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import AddTransaction from './pages/Transactions/AddTransaction';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import Dashboard from './pages/Dashboard/Dashboard';
import Navbar from './components/Navbar/Navbar';
import { Container } from 'react-bootstrap';
import Landing from './pages/Landing/Landing';

function App() {
  return (
    <Router>
      <Navbar />
      {/* Bootstrap Container for page content */}
      <Container fluid className="py-4 px-4">
        <Routes>
          <Route path="/" element={<Landing />} />   
          {/* <Route path="/" element={<Navigate to="/login" />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="/" element={<Landing />} /> */}
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
      </Container>
    </Router>
  );
}

export default App;
// This is the main application component that sets up the routing and renders the Navbar.
// It uses React Router for navigation and Bootstrap for styling.
// The ProtectedRoute component ensures that only authenticated users can access certain routes.