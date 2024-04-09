import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom"; // Import useLocation from react-router-dom
import "../CSS/navbar.css"; // Import your CSS file
import profilePic from '../assets/baking.png';

const Navbar = ({ scrollTop, isAuthenticated }) => {
  const location = useLocation(); // Get the current location
  const [showCart, setShowCart] = useState(false); // Add showCart state

  // Update showCart state whenever location changes
  React.useEffect(() => {
    if (location.pathname === "/item") {
      setShowCart(true);
    } else {
      setShowCart(false);
    }
  }, [location]);

  return (
    <nav className={`navbar ${scrollTop > 100 ? "scrolled" : ""}`}>
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">CAMPUS BITES</Link>
        </li>
        <li className="navbar-item">
          <Link to="/" className="navbar-link">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/about" className="navbar-link">About</Link>
        </li>
        <li className="navbar-item">
          <Link to="/item" className="navbar-link">Items</Link>
        </li>
        <li className="navbar-item">
          <Link to="/contact" className="navbar-link">Contact</Link>
        </li>
        {showCart && (
          <li className="navbar-item">
            <Link to="/cart" className="navbar-link">Cart</Link>
          </li>
        )}
        {isAuthenticated ? (
          <li className="navbar-item">
            <img src={profilePic} alt="Profile" className="profile-pic" />
          </li>
        ) : (
          <li className="navbar-item">
            <Link to="/login" className="navbar-link">Login</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
