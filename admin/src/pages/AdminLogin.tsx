import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/style.css'
const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try{
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (response.status === 200) {
      localStorage.setItem("adminToken", data.token);
      navigate("/");
    }
  } catch (error:any) {
    setError(error.response.data.message || "Login failed");
  }
  }; 

  return (
    <div className="admin-login-container">
    <div className="admin-login-box">
      <h1>Admin Login</h1>
      {error && <div className="admin-error-message">{error}</div>}
      <form onSubmit={handleSubmit}>
        <input
          className="admin-login-input"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Admin Email"
          required
        />
        <input
          className="admin-login-input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button className="admin-login-button" type="submit">Login</button>
      </form>
    </div>
  </div>
  );
};

export default AdminLogin;