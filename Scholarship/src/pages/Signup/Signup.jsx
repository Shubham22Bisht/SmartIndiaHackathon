import React, { useState } from 'react';
import './Signup.css';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [department, setDepartment] = useState('');
  const [role, setRole] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Basic form validation
    if (!name || !email || !password || !confirmPassword || (role === 'admin' && !department)) {
      setError('Please fill in all fields');
      return;
    }
  
    // Email format validation
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      setError('Invalid email format');
      return;
    }
  
    // Password match validation
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
  
    setError(''); // Clear any prior errors
    const userData = {
      name,
      email,
      password,
      role,
      ...(role === 'admin' && { department }) // Conditionally add department for admin role
    };
  
    try {
      // Placeholder URL and headers - replace with your actual values
      const url = ''; // signup url
      const response = await axios.post(url, userData, {
        headers: { 'Content-Type': 'application/json' }
      });
      console.log('Signup successful:', response.data);
      // Handle successful signup (e.g., redirect or clear form)
    } catch (error) {
      console.error('Signup failed:', error.response || error.message);
      setError('Failed to sign up. Please try again.');
    }
  };
  
  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Signup</h2>
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

        {/* Common fields for both Student and Admin */}
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

        <div className="input-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        {/* Additional field for Admin role */}
        {role === 'admin' && (
          <div className="input-group">
            <label htmlFor="department">Department</label>
            <input
              type="text"
              id="department"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              required
            />
          </div>
        )}

        <button type="submit" className="signup-btn">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
