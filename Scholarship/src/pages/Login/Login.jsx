import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';
const Login = () => {
  const [name, setName] = useState('');
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
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
