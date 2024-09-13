import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../Signup/Signup.css'

const EmailForm = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSendOTP = (e) => {
    e.preventDefault();
    if (!email) {
      setError('Please enter your email');
      return;
    }
    setError('');
    // Simulate sending OTP and then redirect to OTP page
    console.log('Sending OTP to:', email);
    navigate(`/verify-otp?email=${encodeURIComponent(email)}`); // Redirect to OTP verification page
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSendOTP}>
        <h2>Enter your Email</h2>
        {error && <p className="error-message">{error}</p>}
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
        <button type="submit" className="signup-btn">Send OTP</button>
        <p className="redirect-login">
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </form>
    </div>
  );
};

export default EmailForm;
