
import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, User, Send } from "lucide-react";
import "./ContactUs.css";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
        alert("Thank you for reaching out! We'll get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <div className="contact-us">
            <motion.div
                className="contact-header"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1>Get in Touch</h1>
                <p>Have questions? We're here to help you start your driving journey.</p>
            </motion.div>

            <motion.div
                className="contact-container"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {/* Contact Info Card */}
                <motion.div className="contact-info-card" variants={itemVariants}>
                    <h2>Contact Information</h2>
                    <p>Reach out to us for any queries or to book a slot.</p>

                    <div className="info-item">
                        <User className="info-icon" />
                        <div>
                            <h4>Nallendrakumar</h4>
                            <p>Proprietor</p>
                        </div>
                    </div>

                    <div className="info-item">
                        <MapPin className="info-icon" />
                        <div>
                            <h4>Address</h4>
                            <p>Main Rd, Chinnamanur,<br />Tamil Nadu 625515</p>
                        </div>
                    </div>

                    <div className="info-item">
                        <Phone className="info-icon" />
                        <div>
                            <h4>Phone</h4>
                            <a href="tel:9842296686">+91-98422 96686</a>
                        </div>
                    </div>

                    <div className="info-item">
                        <Mail className="info-icon" />
                        <div>
                            <h4>Email</h4>
                            <a href="mailto:nalludrivingschool@gmail.com">nalludrivingschool@gmail.com</a>
                        </div>
                    </div>
                </motion.div>

                {/* Contact Form Card */}
                <motion.div className="contact-form-card" variants={itemVariants}>
                    <h2>Send a Message</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder=" "
                            />
                            <label htmlFor="name">Your Name</label>
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder=" "
                            />
                            <label htmlFor="email">Email Address</label>
                        </div>
                        <div className="form-group">
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="5"
                                required
                                placeholder=" "
                            />
                            <label htmlFor="message">How can we help?</label>
                        </div>
                        <button type="submit" className="submit-button">
                            <span>Send Message</span>
                            <Send size={18} />
                        </button>
                    </form>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Contact;
