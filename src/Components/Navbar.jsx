
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Car } from "lucide-react";
import "./Navbar.css";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    // Check if we are on the home page
    const isHome = location.pathname === "/";

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [scrolled]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    const mobileMenuVariants = {
        hidden: { opacity: 0, x: "100%" },
        visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100 } },
        exit: { opacity: 0, x: "100%", transition: { duration: 0.3 } }
    };

    // Navbar class logic:
    // - Always add 'navbar'
    // - If scrolled, add 'scrolled' (dark background)
    // - If NOT home, add 'dark-nav' (always dark background)
    const navbarClass = `navbar ${scrolled ? "scrolled" : ""} ${!isHome ? "dark-nav" : ""}`;

    return (
        <motion.header
            className={navbarClass}
            initial="hidden"
            animate="visible"
            variants={navVariants}
        >
            <div className="logo">
                <Link to="/" className="logo-link">
                    <Car className="logo-icon" size={32} />
                    <span>Nallu Driving School</span>
                </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="nav-links desktop">
                <Link to="/">Home</Link>
                <Link to="/courses">Courses</Link>
                <Link to="/services">Services</Link>
                <Link to="/about">About Us</Link>
                <Link to="/contact" className="contact-btn">Contact</Link>
            </nav>

            {/* Mobile Menu Icon */}
            <div className="hamburger" onClick={toggleMenu}>
                {isOpen ? <X size={28} color="white" /> : <Menu size={28} color="white" />}
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.nav
                        className="nav-links mobile"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={mobileMenuVariants}
                    >
                        <Link to="/" onClick={toggleMenu}>Home</Link>
                        <Link to="/courses" onClick={toggleMenu}>Courses</Link>
                        <Link to="/services" onClick={toggleMenu}>Services</Link>
                        <Link to="/about" onClick={toggleMenu}>About Us</Link>
                        <Link to="/contact" onClick={toggleMenu}>Contact</Link>
                    </motion.nav>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

export default Navbar;
