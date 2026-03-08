import React from 'react';
import { motion } from 'framer-motion';

const StockAdvisory = () => {
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
                        <h1 className="hero-title" style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)' }}>Stock <span className="text-accent">Advisory</span> Services</h1>
                        <p className="hero-subtitle mb-0" style={{ maxWidth: '800px' }}>
                            Important Update: Temporary Pause on New Client Onboarding.
                        </p>
                    </motion.div>

                    <div style={{ marginTop: '4rem', maxWidth: '800px', margin: '4rem auto 0 auto' }}>
                        <motion.div
                            className="about-block"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            style={{ background: 'var(--color-bg-surface)', padding: '3rem', border: '1px solid rgba(26, 26, 26, 0.1)', textAlign: 'center' }}
                        >
                            <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', fontWeight: 600 }}>We are Currently at Capacity</h2>
                            <p style={{ marginBottom: '1.5rem', fontSize: '1.05rem' }}>
                                We understand that you may have been looking forward to joining us, and we sincerely appreciate your interest. In order to provide the highest level of service and dedicated research to our existing clients, we have temporarily paused new client onboarding for our Flexi Cap, SteadyEdge Compounders, and Growth Guard Compounders advisory services.
                            </p>
                            <p style={{ marginBottom: '2.5rem', fontSize: '1.05rem' }}>
                                If you would like to stay updated on when we reopen for new clients, please subscribe to our waiting list below, and we'll notify you as soon as we resume onboarding.
                            </p>

                            <a href="https://forms.gle/dMYET97Rk6TVHeNr7" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ display: 'inline-flex', justifyContent: 'center' }}>
                                Join the Waitlist
                            </a>
                        </motion.div>

                        <div style={{ marginTop: '2rem', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <a href="/Veranda Learning Report_25_08_2025_SSS.pdf" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent-primary)', fontWeight: 600, textDecoration: 'underline' }}>
                                Click here to view / download sample research report — Veranda Learning
                            </a>
                            <a href="/Fineotex Chemicals Detailed report_SSS.pdf" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent-primary)', fontWeight: 600, textDecoration: 'underline' }}>
                                Click here to view / download sample research report — Fineotex Chemicals
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default StockAdvisory;
