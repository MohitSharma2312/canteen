import { useState } from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';

import './App.css'
import './components/navbar.jsx'
// import Navbar from './components/navbar.jsx'
import Home from "../src/pages/home.jsx"
import Login from "../src/pages/Login.jsx"

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true); // Correct usage

  // ... (rest of your code)


  // Simulate authentication (replace with your actual logic)
  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <div>
      {/* ... */}
      <Routes>
        <Route path="/" element={<Navigate to={isAuthenticated ? '/home' : '/login'} replace />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route
          path="/home"
          element={
            isAuthenticated ? <Home /> : <Navigate to="/login" replace />
          }
        />
      </Routes>
      {/* ... */}
    </div>
  )}

export default App;
