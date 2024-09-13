import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import { Home } from './pages/Home';
import StatusTracker from './pages/StatusTracker/StatusTracker';
import Dashboard from './pages/Dashboard/Dashboard';
import EmailForm from './pages/EmailVerification/EmailForm' // New component for Email Input
import OtpVerification from './pages/EmailVerification/OtpVerification'; // New component for OTP Verification
import CompleteSignup from './pages/Signup/CompleteSignup'; // New component for complete signup
import Login from './pages/Login/Login';

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<EmailForm />} /> {/* Step 1: Email input */}
        <Route path="/verify-otp" element={<OtpVerification />} /> {/* Step 2: OTP verification */}
        <Route path="/complete-signup" element={<CompleteSignup />} /> {/* Step 3: Complete signup */}
        <Route path="/status" element={<StatusTracker />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>


  );
};

export default App;
