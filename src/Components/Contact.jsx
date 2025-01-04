import React, { useState } from "react";
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
        setFormData({ name: "", email: "", message: "" }); // Reset form
    };

    return (
        <div className="contact-us">
            <div className="contact-details" style={{color:"white"}}>
                <h3>Contact Us</h3>
                <p><strong>Name:</strong> Nallendrakumar N(Properitor)</p>
                <p><strong>Address:</strong> Main Rd, Chinnamanur, Tamil Nadu 625515</p>
                <p><strong>Phone:</strong> <a href="tel:9842296686">+91-98422 96686</a></p>
                <p><strong>Email:</strong> <a href="mailto:nalludrivingschool@gmail.com">nalludrivingschool@gmail.com</a></p>
            </div>

            <div className="contact-form">
                <h3>Send Us a Message</h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email ID:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Type your message"
                            rows="5"
                            required
                        />
                    </div>
                    <button type="submit" className="submit-button">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
