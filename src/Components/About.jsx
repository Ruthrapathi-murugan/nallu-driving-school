
import React from "react";
import { motion } from "framer-motion";
import "./AboutUs.css";
import simulationImage from '../assets/images/simulation-class.jpg';
import heavyVehicleImage from '../assets/images/heavy-vehicle-class.jpg';
import trainingGroundImage from '../assets/images/training-ground.jpg';
import theoryClassImage from '../assets/images/theory-class.jpg';
import ladyInstructorImage from '../assets/images/lady-instructor.jpg';

const About = () => {
    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <div className="about-us">
            <motion.div
                className="about-header"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1>About Nallu Driving School</h1>
                <p>
                    Empowering safe drivers with comprehensive training and modern facilities.
                </p>
            </motion.div>

            {/* Simulation Class Section */}
            <motion.section
                className="about-section"
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <div className="about-image-wrapper">
                    <img src={simulationImage} alt="Simulation Class" className="about-image" />
                </div>
                <div className="about-text">
                    <h2>Advanced Simulation Classes</h2>
                    <p>
                        Step into the future of driving education with our state-of-the-art simulators.
                        Perfect for beginners to get a feel of the road without the risks. Experience various weather conditions,
                        traffic scenarios, and emergency situations in a completely safe, controlled environment.
                    </p>
                </div>
            </motion.section>

            {/* Separate Training Ground Section */}
            <motion.section
                className="about-section reverse"
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <div className="about-image-wrapper">
                    <img src={trainingGroundImage} alt="Private Training Ground" className="about-image" />
                </div>
                <div className="about-text">
                    <h2>Private Training Ground</h2>
                    <p>
                        Nervous about hitting the main road? Don't be! We have a widespread, private training ground
                        exclusively for our students. Master your parking, reversing, and figure-8s with zero traffic pressure.
                        It's the perfect place to build your confidence before facing real-world traffic.
                    </p>
                </div>
            </motion.section>

            {/* Lady Instructor Section - Placeholder image using training ground or similar if no specific image yet, or description focus */}
            <motion.section
                className="about-section"
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <div className="about-image-wrapper">
                    {/* Reusing theory class image or a generic driving image for now, ideally need a specific one */}
                    <img src={ladyInstructorImage} alt="Lady Instructor" className="about-image" />
                </div>
                <div className="about-text">
                    <h2>Empowering Women Drivers</h2>
                    <p>
                        We take pride in offering a learning environment where female students feel completely at ease. Our highly trained and patient lady instructors are here to guide you every step of the way.
                    </p>
                    <ul className="feature-list">
                        <li><strong>Zero Anxiety:</strong> A supportive atmosphere to help you overcome nervousness and build true road confidence.</li>
                        <li><strong>Safety & Comfort:</strong> Personalized 1-on-1 sessions designed to make you feel safe and understood.</li>
                        <li><strong>Flexible Timing:</strong> Convenient slots available for students, homemakers, and working professionals.</li>
                        <li><strong>Independence:</strong> Our goal is to make you a skilled, self-reliant driver capable of handling any traffic situation.</li>
                    </ul>
                </div>
            </motion.section>

            {/* Heavy Vehicle Class Section */}
            <motion.section
                className="about-section reverse"
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <div className="about-image-wrapper">
                    <img src={heavyVehicleImage} alt="Heavy Vehicle Class" className="about-image" />
                </div>
                <div className="about-text">
                    <h2>Heavy Vehicle Training</h2>
                    <p>
                        Expand your career opportunities with our heavy vehicle training. From buses to trucks,
                        our expert instructors guide you through the complexities of handling large vehicles,
                        ensuring you are road-ready for any professional driving role.
                    </p>
                </div>
            </motion.section>

            {/* Theory Class Section */}
            <motion.section
                className="about-section"
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <div className="about-image-wrapper">
                    <img src={theoryClassImage} alt="Theory Class" className="about-image" />
                </div>
                <div className="about-text">
                    <h2>Comprehensive Theory Classes</h2>
                    <p>
                        Driving is as much about knowledge as it is about skill. Our interactive theory classes cover
                        traffic rules, road signs, vehicle maintenance basics, and defensive driving strategies.
                        We ensure you are not just a license holder, but a knowledgeable driver.
                    </p>
                </div>
            </motion.section>
        </div>
    );
};

export default About;
