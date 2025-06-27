import { useState } from 'react';
import axios from '../../api/axios';
import { useNavigate } from 'react-router-dom';

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
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleRegister} className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6">Register</h2>
        <input
          type="text"
          placeholder="First Name"
          className="w-full mb-4 p-2 border"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="Text"
          placeholder="Last Name"
          className="w-full mb-4 p-2 border"
          onChange={(e) => setLastName(e.target.value)}
        />
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
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
