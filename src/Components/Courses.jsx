import React from "react";
import "./Courses.css";

const Courses = () => {
    return (
        <div className="about-us">
            <div className="about-header">
                <h1>Our Courses</h1>
                <p>
                    Welcome to Nallu Driving School, where we transform learners into confident and responsible drivers.
                    Our mission is to ensure safety, skill, and excellence for every driver who joins us. With years of experience, 
                    we offer a diverse range of courses tailored to every level of learner.
                </p>
            </div>

            <div className="about-content">
                <div className="class-item">
                    <h3>1. Simulation Class</h3>
                    <p>
                        Experience real-life driving scenarios in a safe and controlled environment. Our advanced simulation 
                        classes help beginners build confidence and learn how to handle various situations without the pressure of 
                        being on the road.
                    </p>
                </div>

                <div className="class-item">
                    <h3>2. Beginner's Course</h3>
                    <p>
                        Perfect for those who have never driven before. This course starts from the basics, covering vehicle 
                        controls, road signs, and safe driving techniques, ensuring you're well-prepared to hit the road.
                    </p>
                </div>

                <div className="class-item">
                    <h3>3. Advanced Driving Course</h3>
                    <p>
                        For drivers looking to sharpen their skills, our advanced course focuses on high-speed control, 
                        defensive driving techniques, and advanced parking methods. Ideal for those aiming for perfection!
                    </p>
                </div>

                <div className="class-item">
                    <h3>4. Night Driving Classes</h3>
                    <p>
                        Learn the nuances of driving at night, including headlight management, judging distances, and handling 
                        low-visibility conditions, ensuring you're prepared for any time of day.
                    </p>
                </div>

                <div className="class-item">
                    <h3>5. Highway Driving Lessons</h3>
                    <p>
                        Navigate highways with ease! This course covers merging onto highways, maintaining speed, handling 
                        overtaking, and understanding highway-specific road signs.
                    </p>
                </div>

                <div className="class-item">
                    <h3>6. Refresher Course</h3>
                    <p>
                        For those who haven’t driven in a while, this course revisits the fundamentals and helps rebuild 
                        confidence behind the wheel. Perfect for experienced drivers needing a quick refresh.
                    </p>
                </div>
            </div>

            <div className="about-footer">
                <p>
                    At Nallu Driving School, we believe driving is not just about moving a vehicle; it's about safety, 
                    responsibility, and skill. Join us to master the art of driving with expert instructors and innovative methods.
                </p>
            </div>
        </div>
    );
};

export default Courses;
