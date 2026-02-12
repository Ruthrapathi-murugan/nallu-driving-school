
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";
import Home from "./Components/Home.jsx";
import Courses from "./Components/Courses.jsx";
import About from "./Components/About.jsx";
import Services from "./Components/Services.jsx"; // Import Services
import Contact from "./Components/Contact.jsx";
import Footer from "./Components/Footer.jsx";
import ScrollToTop from "./Components/ScrollToTop.jsx"; // Create this component to handle scroll on route change

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Navbar />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/courses" element={<Courses />} />
                    <Route path="/services" element={<Services />} /> {/* Add Route */}
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
}



export default App;
