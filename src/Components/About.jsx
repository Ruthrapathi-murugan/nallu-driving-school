import React from "react";
import "./AboutUs.css";
import simulationImage from '../assets/images/simulation-class.jpg';
import heavyVehicleImage from '../assets/images/heavy-vehicle-class.jpg';
import trainingGroundImage from '../assets/images/training-ground.jpg';
import theoryClassImage from '../assets/images/theory-class.jpg';

const About = () => {
    return (
        <div className="about-us">
            <h1>About Nallu Driving School</h1>
            <p>
                At Nallu Driving School, we provide a comprehensive approach to driver training, ensuring all our students
                receive the best education for safe and confident driving.
            </p>

            {/* Simulation Class Section */}
            <section className="about-section">
                <img src={simulationImage} alt="Simulation Class" className="about-image" />
                <div className="about-text">
                    <h2>Simulation Classes</h2>
                    <p>
                        Our simulation classes provide students with a safe, controlled environment to practice driving
                        before taking to the road. Using state-of-the-art simulators, students can master basic skills and
                        more complex driving scenarios.
                    </p>
                </div>
            </section>

            {/* Heavy Vehicle Class Section */}
            <section className="about-section">
                <img src={heavyVehicleImage} alt="Heavy Vehicle Class" className="about-image" />
                <div className="about-text">
                    <h2>Heavy Vehicle Classes</h2>
                    <p>
                        We offer specialized training for heavy vehicles like buses and trucks. Our experienced instructors
                        ensure you are ready for any challenges that come with driving large vehicles, making you an expert
                        on the road.
                    </p>
                </div>
            </section>

            {/* Separate Training Ground Section */}
            <section className="about-section">
                <img src={trainingGroundImage} alt="Training Ground" className="about-image" />
                <div className="about-text">
                    <h2>Separate Training Ground</h2>
                    <p>
                        We have a dedicated training ground where students can practice their driving skills away from the
                        busy streets. This provides a risk-free environment where beginners can learn the fundamentals of
                        driving.
                    </p>
                </div>
            </section>

            {/* Theory Class Section */}
            <section className="about-section">
                <img src={theoryClassImage} alt="Theory Class" className="about-image" />
                <div className="about-text">
                    <h2>Theory Classes</h2>
                    <p>
                        In addition to practical driving lessons, we offer comprehensive theory classes to equip students
                        with the knowledge necessary for safe driving. Topics cover road signs, traffic rules, and more.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default About;
