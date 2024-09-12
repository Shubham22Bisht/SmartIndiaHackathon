import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Navbar from './components/Navbar/Navbar';
import { Home } from './pages/Home';
import StatusTracker from './pages/StatusTracker/StatusTracker';
const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/status" element={<StatusTracker/>}/>
      </Routes>
    </Router>
  );
};

// Home component (you can style it as needed)
// const Home = () => (
//   <div style={{ padding: '20px', textAlign: 'center' }}>
//     <h2>Welcome to MyApp</h2>
//     <p>This is a simple application with a login and signup page.</p>
//   </div>
// );

export default App;
