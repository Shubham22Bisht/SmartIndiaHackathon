import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Navbar from './components/Navbar/Navbar';
import { Home } from './pages/Home';
import StatusTracker from './pages/StatusTracker/StatusTracker';
import Dashboard from './pages/Dashboard/Dashboard';
const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/status" element={<StatusTracker/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        {/* <Route path="/form/:userId" element={<Form/>} /> */}
      </Routes>
    </Router>


  );
};
export default App;
