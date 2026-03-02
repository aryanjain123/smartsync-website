import React from 'react';
import { motion } from 'framer-motion';

const MonthlyDisclosures = () => {
    return (
        <main className="page-wrapper pt-32">
            <section className="section">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="hero-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)' }}>Monthly <span className="text-accent">Disclosures</span></h1>
                        <p className="hero-subtitle mb-0">
                            Regulatory disclosures of investor complaints.
                        </p>
                    </motion.div>

                    <div style={{ marginTop: '4rem' }}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            style={{ background: 'var(--color-bg-surface)', padding: '3rem', border: '1px solid rgba(26, 26, 26, 0.1)' }}
                        >
                            <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', fontWeight: 600 }}>Monthly Disclosures of Investor Complaints</h2>
                            <p style={{ marginBottom: '2rem', fontSize: '1.05rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
                                Annexure B – Formats for investors complaints data to be disclosed monthly by IAs on their website/mobile application.
                            </p>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <div style={{ padding: '1.5rem', border: '1px solid rgba(26,26,26,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <strong style={{ fontSize: '1.1rem' }}>Data for the month ending latest</strong>
                                    <span style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>Available</span>
                                </div>
                                <div style={{ padding: '1.5rem', border: '1px solid rgba(26,26,26,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <strong style={{ fontSize: '1.1rem' }}>The trend of monthly disposal of complaints</strong>
                                    <span style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>Available</span>
                                </div>
                                <div style={{ padding: '1.5rem', border: '1px solid rgba(26,26,26,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <strong style={{ fontSize: '1.1rem' }}>The trend of annual disposal of complaints</strong>
                                    <span style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>Available</span>
                                </div>
                            </div>

                            <p style={{ marginTop: '2rem', fontSize: '0.9rem', color: 'var(--color-text-secondary)', fontStyle: 'italic' }}>
                                Note: Full tabular data tracking received, resolved, and pending complaints is maintained as per SEBI regulations. 0 complaints have been registered in the ongoing period.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default MonthlyDisclosures;
