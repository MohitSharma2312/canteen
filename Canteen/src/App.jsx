import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar.jsx'; // Import Navbar
import Home from '../src/pages/home.jsx';
import Login from '../src/pages/Login.jsx';
import Item from '../src/pages/item.jsx';
import AboutUs from '../src/pages/about.jsx';
import ContactPage from '../src/pages/contact.jsx';
import Cart from '../src/pages/cart.jsx';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Correct usage
  const [profilePic, setProfilePic] = useState(''); // Add profilePic state
  const [showCart, setShowCart] = useState(false); // Add showCart state
  const [cart, setCart] = useState([]); // Add cart state

  // Simulate authentication (replace with your actual logic)
  const handleLogin = () => {
    setIsAuthenticated(true);
    setProfilePic('');
  };

  const handleItemPageVisit = () => {
    setShowCart(true);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((item, i) => i !== index));
  };

  const addToCart = (item) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id && cartItem.foodCourt == item.foodCourt);
    if (existingItem) {
      setCart(cart.map(cartItem => 
        cartItem.id === item.id && cartItem.foodCourt == item.foodCourt
          ? { ...existingItem, quantity: existingItem.quantity + 1 } 
          : cartItem
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };
  const adjustQuantity = (index, quantity) => {
    setCart(cart.map((item, i) => i === index ? {...item, quantity} : item));
  };

  return (
    <div>
      {isAuthenticated && <Navbar isAuthenticated={isAuthenticated} profilePic={profilePic} showCart={showCart} />}
      <Routes>
        <Route path="/home" element={isAuthenticated ? <Home /> : <Navigate to="/login" replace />} />
        <Route path="/" element={<Navigate to={isAuthenticated ? '/home' : '/login'} replace />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/item" element={isAuthenticated ? <Item addToCart={addToCart} onVisit={handleItemPageVisit} /> : <Navigate to="/login" replace />} />
        <Route path="/about" element={isAuthenticated ? <AboutUs /> : <Navigate to="/login" replace />} />
        <Route path="/contact" element={isAuthenticated ? <ContactPage /> : <Navigate to="/login" replace />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} removeFromCart={removeFromCart} adjustQuantity={adjustQuantity} />} />

      </Routes>
    </div>
  );
}

export default App;
