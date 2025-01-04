import React from "react";
import { Link } from "react-router-dom"; 
import "./Home.css";
import drivingImage1 from '../assets/images/driving-school.jpg';
import drivingImage2 from '../assets/images/car-driving.jpg';
import drivingImage3 from '../assets/images/simulation-class.jpg';

const Home = () => {
    return (
        <div className="home">
            <div className="home-content">
                <h1>Welcome to Nallu Driving School</h1>
                <p>
                    Learn to drive with confidence. Whether you're a beginner or need to refine your skills, 
                    our courses are designed to help you become a skilled and responsible driver.
                </p>
                <p>
                    Start your journey today and choose from our variety of courses tailored to your needs.
                </p>
                <Link to="/courses">
                    <button className="cta-button">Get Started</button>
                </Link>
            </div>

            <div className="home-marquee">
                <div className="marquee-container">
                    <img src={drivingImage1} alt="Driving School" className="marquee-image" />
                    <img src={drivingImage2} alt="Car Driving" className="marquee-image" />
                    <img src={drivingImage3} alt="Road Safety" className="marquee-image" />
                    {/* Repeat the first image for smooth looping */}
                    <img src={drivingImage1} alt="Driving School" className="marquee-image" />
                </div>
            </div>
        </div>
    );
};

export default Home;
