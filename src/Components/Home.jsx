
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { User, MapPin, Gamepad2, ShieldCheck, Users, Trophy } from "lucide-react";
import "./Home.css";
import drivingImage1 from '../assets/images/driving-school.jpg';
import nalluDrivingVideo from '../assets/images/nallu_driving.mp4';
import simulationImage from '../assets/images/simulation-class.jpg';
import heavyVehicleImage from '../assets/images/heavy-vehicle-class.jpg';
import trainingGroundImage from '../assets/images/training-ground.jpg';
import theoryClassImage from '../assets/images/theory-class.jpg';
import ladyInstructorImage from '../assets/images/lady-instructor.jpg';

const Home = () => {
    const fadeIn = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const marqueeImages = [
        drivingImage1,
        simulationImage,
        ladyInstructorImage,
        trainingGroundImage,
        heavyVehicleImage,
        theoryClassImage,
    ];

    return (
        <div className="home">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <motion.h1
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Drive with <span className="highlight-text">Confidence</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        Master the roads with Nallu Driving School. Professional training, modern facilities, and safety first.
                    </motion.p>
                    <motion.div
                        className="hero-buttons"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                    >
                        <Link to="/courses">
                            <button className="cta-button primary">Start Learning</button>
                        </Link>
                        <Link to="/contact">
                            <button className="cta-button secondary">Contact Us</button>
                        </Link>
                    </motion.div>
                </div>
                <div className="hero-3d-element">
                    {/* Replaced image with video as requested */}
                    <motion.video
                        src={nalluDrivingVideo}
                        className="floating-car"
                        autoPlay
                        loop
                        muted
                        playsInline
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    />
                </div>
            </section>

            {/* Unique Features Section */}
            <section className="features-section">
                <motion.div
                    className="section-header"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                >
                    <h2>Why Choose Us?</h2>
                    <p>Experience the best driving education with our exclusive facilities.</p>
                </motion.div>

                <motion.div
                    className="features-grid"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.div className="feature-card" variants={fadeIn} whileHover={{ scale: 1.05 }}>
                        <div className="icon-wrapper">
                            <User size={48} />
                        </div>
                        <h3>Special Lady Instructor</h3>
                        <p>We have experienced female instructors dedicated to teaching lady students, ensuring a comfortable learning environment.</p>
                    </motion.div>

                    <motion.div className="feature-card" variants={fadeIn} whileHover={{ scale: 1.05 }}>
                        <div className="icon-wrapper">
                            <MapPin size={48} />
                        </div>
                        <h3>Private Training Ground</h3>
                        <p>Practice safely in our separate, expansive training ground before hitting the main roads. Master parking and maneuvering stress-free.</p>
                    </motion.div>

                    <motion.div className="feature-card" variants={fadeIn} whileHover={{ scale: 1.05 }}>
                        <div className="icon-wrapper">
                            <Gamepad2 size={48} />
                        </div>
                        <h3>Driving Simulation</h3>
                        <p>Experience real-world scenarios in a safe, virtual environment with our state-of-the-art driving simulator.</p>
                    </motion.div>
                </motion.div>
            </section>

            {/* Customer Attraction / Stats Section */}
            <section className="stats-section">
                <div className="stats-overlay"></div>
                <div className="stats-container">
                    <motion.div
                        className="stat-item"
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <ShieldCheck size={64} className="stat-icon" />
                        <h3>100%</h3>
                        <p>Safety Record</p>
                    </motion.div>
                    <motion.div
                        className="stat-item"
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <Users size={64} className="stat-icon" />
                        <h3>1000+</h3>
                        <p>Happy Students</p>
                    </motion.div>
                    <motion.div
                        className="stat-item"
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                    >
                        <Trophy size={64} className="stat-icon" />
                        <h3>20+</h3>
                        <p>Years Experience</p>
                    </motion.div>
                </div>
            </section>

            {/* Image Marquee Section */}
            <section className="marquee-section">
                <motion.div
                    className="section-header"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    style={{ marginBottom: '40px' }}
                >
                    <h2>Our Gallery</h2>
                    <p>A glimpse into our training and facilities.</p>
                </motion.div>
                <div className="marquee-container">
                    <div className="marquee-track">
                        {/* Render images twice to create seamless loop */}
                        {[...marqueeImages, ...marqueeImages].map((img, index) => (
                            <div className="marquee-item" key={index}>
                                <img src={img} alt={`Gallery ${index}`} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="cta-section">
                <motion.div
                    className="cta-content"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2>Ready to get behind the wheel?</h2>
                    <Link to="/contact">
                        <button className="cta-button large">Book Your Slot Now</button>
                    </Link>
                </motion.div>
            </section>
        </div>
    );
};

export default Home;
