import { useState } from 'react';
import axios from '../../api/axios';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login: loginUser } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/auth/login', { email, password });
      console.log('✅ Login response:', res.data); // Add this
      localStorage.setItem('token', res.data.token);
      loginUser(res.data.token); // Update context with the token
    //   alert("Login successful! Redirecting to dashboard...");

      navigate('/dashboard');
    } catch (err) {
        console.error('❌ Login error:', err.response?.data?.msg);
      alert(err.response?.data?.msg || "Login failed");
    }
  };

  return (
    
    <div className="flex justify-center items-center h-screen">

      <form onSubmit={handleLogin} className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-2 border"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-2 border"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">
          Log In
        </button>

        <p className="mt-4 text-sm">
          Don’t have an account?{' '}
          <Link to="/register" className="text-blue-600 underline">
            Register here
          </Link>
          </p>
      </form>
    </div>
  );
}

export default Login;
// This component handles the user login functionality.
// It uses Axios to send a POST request to the backend API for authentication.