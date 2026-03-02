import React from 'react';
import { motion } from 'framer-motion';
import './Milestones.css';

const milestones = [
    { value: "35+", unit: "Years", label: "We are a Team of Professionals Vastly Experienced in both Technical & Financial Aspects of Investing." },
    { value: "500+", unit: "Companies", label: "Number of BSE and NSE Listed Companies Researched for their Future Potentials." },
    { value: "500+", unit: "Clients", label: "We Earnestly Serve Clients Across Various Categories and Different Portfolio Sizes." }
];

const Milestones = () => {
    return (
        <section className="milestones section" id="milestones">
            <div className="container">

                <div className="milestones-layout">
                    <motion.div
                        className="milestones-content"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="section-title text-accent">Our Milestones</h2>
                        <p className="section-subtitle">A track record built on continuous learning, transparency, and deep fundamental analysis.</p>
                    </motion.div>

                    <div className="milestones-grid">
                        {milestones.map((ms, index) => (
                            <motion.div
                                className="milestone-item"
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                            >
                                <div className="ms-number">
                                    <span className="ms-val">{ms.value}</span>
                                    <span className="ms-unit">{ms.unit}</span>
                                </div>
                                <p className="ms-label">{ms.label}</p>
                                <div className="ms-line"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Milestones;
