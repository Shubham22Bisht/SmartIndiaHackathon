import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student'); // Added role state
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here based on the role (student or admin)
    console.log('Role:', role);
    console.log('Email:', email);
    if (!email || !password) {
      setError('Please enter all fields');
    } else {
      setError('');
      console.log('Logging in...');
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
