import React from "react";
 import { Link, NavLink } from "react-router-dom";
// import '../CSS/navbar.css'; // Assuming you have a CSS file named Navbar.css

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <ul className="navbar-menu">
                    <li className="navbar-item">
                        <NavLink to="/home.jsx" activeClassName="active" className="navbar-links">Home</NavLink>
                    </li>
                    {/* <li className="navbar-item">
                        <NavLink to="/about" activeClassName="active" className="navbar-links">About</NavLink>
                    </li>
                    <li className="navbar-item">
                        <NavLink to="/services" activeClassName="active" className="navbar-links">Services</NavLink>
                    </li>
                    <li className="navbar-item">
                        <NavLink to="/contact" activeClassName="active" className="navbar-links">Contact</NavLink>
                    </li> */}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
