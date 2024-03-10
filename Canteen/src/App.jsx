import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar.jsx'; // Import Navbar
import Home from '../src/pages/home.jsx';
import Login from '../src/pages/Login.jsx';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Correct usage
  const [profilePic, setProfilePic] = useState(''); // Add profilePic state

  // Simulate authentication (replace with your actual logic)
  const handleLogin = () => {
    setIsAuthenticated(true);
    setProfilePic('');
  };

  return (
    <div>
      <Routes>
        {/* Display the home page only if authenticated */}
        <Route path="/home" element={isAuthenticated ? <Home /> : <Navigate to="/login" replace />} />
        {/* Redirect to home if already authenticated */}
        <Route path="/" element={<Navigate to={isAuthenticated ? '/home' : '/login'} replace />} />
        {/* Display the login page */}
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
      </Routes>
      {/* Show the Navbar only if authenticated */}
      {isAuthenticated && <Navbar isAuthenticated={isAuthenticated} profilePic={profilePic} />}
    </div>
  );
}

export default App;
