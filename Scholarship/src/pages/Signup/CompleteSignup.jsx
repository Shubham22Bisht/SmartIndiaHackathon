import React, { useState } from 'react';
import './Signup.css';
import { Link } from 'react-router-dom'; // Assuming you're using React Router

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [department, setDepartment] = useState('');
  const [role, setRole] = useState('student');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    setError('');
    // Handle signup logic here based on the role (student or admin)
    console.log('Role:', role);
    console.log('Name:', name);
    console.log('Email:', email);
    if (role === 'admin') {
      console.log('Department:', department);
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

        {/* <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div> */}

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
        
        {/* Link to redirect to login */}
        {/* <p className="redirect-login">
          Already have an account? <Link to="/login">Login here</Link>
        </p> */}
      </form>
    </div>
  );
};

export default Signup;
