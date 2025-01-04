import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="navbar">
            <div className="logo">
                <Link to="/">Nallu Driving School</Link>
            </div>
            <div className="hamburger" onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <nav className={`nav-links ${isOpen ? "active" : ""}`}>
                <Link to="/" onClick={toggleMenu}>Home</Link>
                <Link to="/courses" onClick={toggleMenu}>Courses</Link>
                <Link to="/about" onClick={toggleMenu}>About Us</Link>
                <Link to="/contact" onClick={toggleMenu}>Contact</Link>
            </nav>
        </header>
    );
};

export default Navbar;
