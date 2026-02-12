
import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Linkedin, Phone, Mail, MapPin } from "lucide-react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h3>About Nallu</h3>
                    <p>
                        Dedicated to creating safe, confident, and responsible drivers.
                        Join us to experience the best driving education with modern facilities.
                    </p>
                </div>

                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/courses">Courses</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Get in Touch</h3>
                    <ul className="footer-contact">
                        <li>
                            <MapPin size={18} className="footer-icon" />
                            <span>Main Rd, Chinnamanur, TN 625515</span>
                        </li>
                        <li>
                            <Phone size={18} className="footer-icon" />
                            <a href="tel:9842296686">+91-98422 96686</a>
                        </li>
                        <li>
                            <Mail size={18} className="footer-icon" />
                            <a href="mailto:nalludrivingschool@gmail.com">nalludrivingschool@gmail.com</a>
                        </li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Follow Us</h3>
                    <div className="social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
                            <Facebook size={24} />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                            <Instagram size={24} />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
                            <Twitter size={24} />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                            <Linkedin size={24} />
                        </a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Nallu Driving School. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
