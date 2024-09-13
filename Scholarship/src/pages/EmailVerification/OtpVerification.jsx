import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../Signup/Signup.css'

const OtpVerification = () => {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const email = new URLSearchParams(location.search).get('email');

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    if (otp !== '1234') { // Simulate OTP verification
      setError('Invalid OTP');
      return;
    }
    setError('');
    navigate(`/complete-signup?email=${encodeURIComponent(email)}`);
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleVerifyOtp}>
        <h2>Verify OTP</h2>
        {error && <p className="error-message">{error}</p>}
        <p>An OTP has been sent to {email}</p>
        <div className="input-group">
          <label htmlFor="otp">Enter OTP</label>
          <input
            type="text"
            id="otp"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="signup-btn">Verify OTP</button>
      </form>
    </div>
  );
};

export default OtpVerification;
