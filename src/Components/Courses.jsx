
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Monitor, BookOpen, Truck, Moon, Gauge, RefreshCw, Trophy, X, PlayCircle } from "lucide-react";
import "./Courses.css";

// Course Data Array
const coursesData = [
    {
        id: 1,
        title: "Simulation Training",
        icon: <Monitor size={40} />,
        badge: "New",
        shortDesc: "Master the basics in our cutting-edge simulator before hitting the road. Perfect for absolute beginners.",
        fullDesc: "Our state-of-the-art driving simulator offers a realistic driving experience without the risks. You'll navigate through various weather conditions, traffic scenarios, and emergency situations. This builds crucial muscle memory and decision-making skills before you even step into a real car.",
        videoUrl: "https://www.youtube.com/embed/wN4N0A-sU7A"
    },
    {
        id: 2,
        title: "Beginner's Course",
        icon: <BookOpen size={40} />,
        shortDesc: "A comprehensive start for new drivers. Covers vehicle controls and basic maneuvers.",
        fullDesc: "Designed for those who have never driven before. We start from scratch—understanding the vehicle controls, mirrors, and safety checks. You'll practice starting, stopping, steering, and basic turns in our private training ground before progressing to quiet public roads.",
        videoUrl: "https://www.youtube.com/embed/5B9m2P5n_04"
    },
    {
        id: 3,
        title: "Advanced Driving",
        icon: <Trophy size={40} />,
        shortDesc: "Sharpen your skills with defensive driving techniques and complex scenarios.",
        fullDesc: "Take your driving to the next level. This course focuses on defensive driving strategies to anticipate and avoid accidents. You'll also master complex parking techniques (parallel, reverse) and handling challenging traffic situations.",
        videoUrl: "https://www.youtube.com/embed/R_j-B1_7Z-U"
    },
    {
        id: 4,
        title: "Night Driving",
        icon: <Moon size={40} />,
        shortDesc: "Gain confidence driving after dark. Learn to judge distances and handle glare.",
        fullDesc: "Night driving presents unique challenges like reduced visibility and headlight glare. Our instructors will teach you how to use your lights effectively, judge distances in the dark, and stay safe when sharing the road at night.",
        videoUrl: "https://www.youtube.com/embed/rCg2p23i-1Y"
    },
    {
        id: 5,
        title: "Highway Lessons",
        icon: <Gauge size={40} />,
        shortDesc: "Conquer the fear of high speeds. Learn safe lane changing and overtaking.",
        fullDesc: "Highway driving requires confidence and precision. We'll teach you how to merge safely onto high-speed roads, maintain proper following distance, change lanes smoothly, and exit safely. Perfect for eliminating highway anxiety.",
        videoUrl: "https://www.youtube.com/embed/R9N39bXw5yQ"
    },
    {
        id: 6,
        title: "Heavy Vehicle",
        icon: <Truck size={40} />,
        shortDesc: "Specialized training for trucks and buses. Includes safety regulations.",
        fullDesc: "Open up new career paths with our heavy vehicle training. You'll learn to handle the size and weight of trucks or buses, understand air brake systems, and master the specific road rules that apply to heavy vehicles.",
        videoUrl: "https://www.youtube.com/embed/cRfyE-AFFn8"
    },
    {
        id: 7,
        title: "Refresher Course",
        icon: <RefreshCw size={40} />,
        shortDesc: "Getting back to driving after a break? We'll help you regain your confidence.",
        fullDesc: "It's normal to feel rusty if you haven't driven in a while. This course is customized to your needs, reviewing the basics and focusing on areas where you feel least confident, helping you get back on the road safely.",
        videoUrl: "https://www.youtube.com/embed/1zDoJL18C5s"
    },
];

const Courses = () => {
    const [selectedCourse, setSelectedCourse] = useState(null);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    const modalVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 300, damping: 25 } },
        exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3 } }
    };

    return (
        <div className="courses-page">
            <div className="courses-header">
                <h1>Our Professional Courses</h1>
                <p>
                    From beginners to advanced drivers, we have a course tailored just for you.
                    Click on any course to view details and watch a preview.
                </p>
            </div>

            <motion.div
                className="courses-grid"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {coursesData.map((course) => (
                    <motion.div
                        key={course.id}
                        className={`course-card ${course.badge ? 'featured' : ''}`}
                        variants={cardVariants}
                        onClick={() => setSelectedCourse(course)}
                        layoutId={`card-${course.id}`}
                    >
                        <div className="icon-box">
                            {course.icon}
                        </div>
                        <h3>{course.title}</h3>
                        <p>{course.shortDesc}</p>
                        {course.badge && <span className="badge">{course.badge}</span>}
                        <div className="click-indicator">
                            <PlayCircle size={16} /> <span>View Details</span>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Course Details Modal */}
            <AnimatePresence>
                {selectedCourse && (
                    <div className="course-modal-overlay" onClick={() => setSelectedCourse(null)}>
                        <motion.div
                            className="course-modal-content"
                            variants={modalVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            onClick={(e) => e.stopPropagation()} // Prevent close on modal click
                            layoutId={`card-${selectedCourse.id}`}
                        >
                            <button className="close-modal-btn" onClick={() => setSelectedCourse(null)}>
                                <X size={24} />
                            </button>

                            <div className="modal-header">
                                <div className="modal-icon-box">
                                    {selectedCourse.icon}
                                </div>
                                <h2>{selectedCourse.title}</h2>
                            </div>

                            <div className="video-container">
                                <iframe
                                    width="100%"
                                    height="315"
                                    src={selectedCourse.videoUrl}
                                    title={selectedCourse.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>

                            <div className="modal-body">
                                <h3>Course Overview</h3>
                                <p>{selectedCourse.fullDesc}</p>
                                <button className="cta-button primary full-width">Enroll Now</button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Courses;
