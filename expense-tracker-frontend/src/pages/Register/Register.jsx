import { useState } from 'react';
import axios from '../../api/axios';
import { useNavigate } from 'react-router-dom';
import PublicNavbar from '../../components/PublicNavbar';
import './Register.css';

function Register() {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/auth/register', { firstname, lastname, email, password });
      alert("Registration successful! Please log in.");
      navigate('/login');
    } catch (err) {
      alert(err.response?.data?.msg || "Registration  failed");
    }
  };

  return (
    <>
    <PublicNavbar />
    <div className="register-container">
  <form onSubmit={handleRegister} className="register-box">
    <h2>Register</h2>
    <input
      type="text"
      placeholder="First Name"
      onChange={(e) => setFirstName(e.target.value)}
      required
    />
    <input
      type="text"
      placeholder="Last Name"
      onChange={(e) => setLastName(e.target.value)}
      required
    />
    <input
      type="email"
      placeholder="Email"
      onChange={(e) => setEmail(e.target.value)}
      required
    />
    <input
      type="password"
      placeholder="Password"
      onChange={(e) => setPassword(e.target.value)}
      required
    />
    <button type="submit">Register</button>
  </form>
</div>

    </>
  );
}

export default Register;
