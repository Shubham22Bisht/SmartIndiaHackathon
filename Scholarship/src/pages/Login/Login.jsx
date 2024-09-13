import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = "https://your-domain.com/login";  // Update this URL with your actual endpoint
    try {
      const response = await axios.post(url, {
        name: name,
        password: password
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      console.log('Response:', response.data);
      // You can handle your login logic or redirect here
    } catch (error) {
      console.error('Error:', error.response);
      // Handle errors here
    }
  };
  

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        {error && <p className="error-message">{error}</p>}

        {/* Checkboxes for role selection */}
        <div className="role-selection">
          <label>
            <input
              type="radio"
              name="role"
              value="student"
              checked={role === 'student'}
              onChange={() => setRole('student')}
              required
            />
            Student
          </label>
          <label>
            <input
              type="radio"
              name="role"
              value="admin"
              checked={role === 'admin'}
              onChange={() => setRole('admin')}
              required
            />
            Admin
          </label>
        </div>

        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="login-btn">Login</button>
      </form>
    </div>
  );
};

export default Login;
