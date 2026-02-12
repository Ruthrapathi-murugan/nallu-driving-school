
import React from "react";
import { motion } from "framer-motion";
import { FileText, UserCheck, RefreshCw, Truck, ShieldCheck, FilePlus } from "lucide-react";
import "./Services.css";


const Services = () => {
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

    const servicesList = [
        {
            icon: <FilePlus size={40} />,
            title: "Learner's License (LLR)",
            description: "Hassle-free application for your Learner's License. We guide you through the documentation and online test process."
        },
        {
            icon: <UserCheck size={40} />,
            title: "Driving License (DL)",
            description: "From slot booking to the driving test, we assist you in obtaining your permanent driving license smoothly."
        },
        {
            icon: <RefreshCw size={40} />,
            title: "License Renewal",
            description: "Is your license expiring? We handle the renewal process quickly so you can keep driving without worry."
        },
        {
            icon: <FileText size={40} />,
            title: "Name Transfer",
            description: "Buying or selling a vehicle? We take care of the ownership transfer ownership paperwork efficiently."
        },
        {
            icon: <Truck size={40} />,
            title: "RC Transfer & Works",
            description: "Assistance with Registration Certificate (RC) transfer, duplicate RC, and address changes."
        },
        {
            icon: <ShieldCheck size={40} />,
            title: "Fitness Certificate (FC)",
            description: "We help with the renewal of Fitness Certificates for transport and commercial vehicles."
        }
    ];

    return (
        <div className="services-page">
            <motion.div
                className="services-header"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1>RTO Services & Paperwork</h1>
                <p>
                    Beyond driving training, we offer comprehensive assistance for all your RTO-related needs.
                    Let us handle the paperwork while you focus on the road.
                </p>
            </motion.div>

            <div className="services-content">


                <motion.div
                    className="services-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {servicesList.map((service, index) => (
                        <motion.div key={index} className="service-card" variants={cardVariants}>
                            <div className="service-icon-box">
                                {service.icon}
                            </div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <motion.div
                className="services-cta"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
            >
                <h2>Need Help with RTO Works?</h2>
                <p>Contact us today for a consultation or visit our office.</p>
                <div className="service-contact-info">
                    {/* You can link to contact page or show simple phone number */}
                    <a href="/contact" className="cta-button">Contact Us</a>
                </div>
            </motion.div>
        </div>
    );
};

export default Services;
