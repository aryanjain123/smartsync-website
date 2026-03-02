import React from 'react';
import { motion } from 'framer-motion';

const MissionSmile = () => {
    return (
        <main className="page-wrapper pt-32">
            <section className="section">
                <div className="container">
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="hero-title" style={{ fontSize: 'clamp(3rem, 5vw, 4rem)' }}>MissioN <span className="text-accent">S.M.I.L.E</span></h1>
                        <p className="hero-subtitle mb-0" style={{ maxWidth: '800px' }}>
                            Stock Market Investors Learning & Education
                        </p>
                    </motion.div>

                    <div style={{ marginTop: '4rem', maxWidth: '800px', margin: '4rem auto 0 auto' }}>
                        <motion.div
                            className="about-block"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', fontWeight: 600 }}>Empowering Investors</h2>
                            <p style={{ marginBottom: '1.5rem' }}>
                                MissioN S.M.I.L.E (Stock Market Investors Learning & Education) is our initiative designed to bring clarity, education, and confidence to investors. We believe that an educated investor is a resilient investor.
                            </p>
                            <p style={{ marginBottom: '1.5rem' }}>
                                Through S.M.I.L.E, we organize regular workshops, publish detailed research reports, and host interactive sessions demystifying the complexities of the financial markets. Our goal is to shift the focus from short-term speculation to long-term wealth creation based on fundamental realities.
                            </p>
                            <p style={{ fontWeight: 600, color: 'var(--color-accent-primary)' }}>
                                True wealth is built on a foundation of knowledge.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default MissionSmile;
