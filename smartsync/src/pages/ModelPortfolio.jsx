import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const ModelPortfolio = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', inquiryType: 'Inquiring about Model Portfolio', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({ success: null, message: '' });

    const handleInputChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus({ success: null, message: '' });

        try {
            const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000/api/contact';
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            if (response.ok) {
                setSubmitStatus({ success: true, message: data.message || 'Thank you. We will contact you soon to schedule the call.' });
                setFormData({ name: '', email: '', inquiryType: 'Inquiring about Model Portfolio', message: '' });
                setTimeout(() => setIsModalOpen(false), 3000);
            } else {
                setSubmitStatus({ success: false, message: data.message || 'Failed to send inquiry.' });
            }
        } catch (error) {
            setSubmitStatus({ success: false, message: 'Network error. Please try again later.' });
        } finally {
            setIsSubmitting(false);
        }
    };
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
                        <h1 className="hero-title" style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)' }}>Stock <span className="text-accent">SIP</span> Portfolio Advisory</h1>
                        <p className="hero-subtitle mb-0" style={{ maxWidth: '800px', marginBottom: '2rem' }}>
                            Build your wealth one SIP at a time. Designed to leverage rupee-cost averaging while generating above-average returns with downside protection.
                        </p>
                        <button
                            className="btn-primary"
                            style={{ marginTop: '2rem' }}
                            onClick={() => setIsModalOpen(true)}
                        >
                            Schedule a Call
                        </button>
                    </motion.div>

                    <div style={{ marginTop: '4rem', maxWidth: '800px', margin: '4rem auto 0 auto' }}>
                        <motion.div
                            className="about-block"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            style={{ marginBottom: '4rem' }}
                        >
                            <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', fontWeight: 600 }}>Our SIP Philosophy</h2>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
                                {['Investment, Not Speculation', 'Specialization Based On Circle of Competence', 'Above Average Returns, Below Average Risk', 'Risk Management & Capital Protection', 'Emphasis On Consistent Performance', "Focus on Company's Fundamentals"].map((item, i) => (
                                    <div key={i} style={{ background: 'var(--color-bg-surface)', padding: '2rem', border: '1px solid rgba(26,26,26,0.1)', display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                                        <div style={{ width: '8px', height: '8px', background: 'var(--color-accent-primary)', borderRadius: '50%', flexShrink: 0 }} />
                                        <span style={{ fontWeight: 500, fontSize: '1.05rem' }}>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            className="about-block"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            style={{ marginBottom: '4rem' }}
                        >
                            <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', fontWeight: 600 }}>How SIP Advisory Works</h2>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '2rem' }}>
                                {[
                                    { title: "Monthly Investment Amount", desc: "Say you allocate INR 1 lakh every month for investment." },
                                    { title: "Stock Distribution (Equal Weightage)", desc: "Let's divide the total investment amount by the number of stocks. So, for each of the 20 individual stocks, we propose investing INR 5000 every month." },
                                    { title: "Implementation", desc: "We will email you on the 1st trading day of every month, with the portfolio of 20 stocks, along with their weightage. These trades are to be then executed by you." },
                                    { title: "Rebalancing", desc: "We will also inform you via email of any instructions regarding getting in or out of any stock, required to adjust the allocation over time and maintain the balanced weightage in your portfolio." },
                                    { title: "Tracking and Monitoring", desc: "To help us keep track of the performance of each investment, we require you to share your holding information with us after you execute the trades at the beginning of every month." }
                                ].map((step, i) => (
                                    <div key={i} style={{ display: 'flex', gap: '2rem', background: 'var(--color-bg-surface)', padding: '2.5rem', border: '1px solid rgba(26, 26, 26, 0.1)', alignItems: 'center' }}>
                                        <div style={{ fontSize: '3rem', fontWeight: 300, color: 'var(--color-accent-primary)', lineHeight: 1, fontFamily: 'var(--font-display)', opacity: 0.5, minWidth: '60px' }}>
                                            0{i + 1}
                                        </div>
                                        <div>
                                            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', fontWeight: 600 }}>{step.title}</h3>
                                            <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: 0 }}>{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            className="about-block"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            style={{ background: 'var(--color-bg-surface)', padding: '3rem', border: '1px solid rgba(26, 26, 26, 0.1)' }}
                        >
                            <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', fontWeight: 600 }}>Pricing Options</h2>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                                <div style={{ borderRight: '1px solid rgba(26,26,26,0.1)', paddingRight: '2rem' }}>
                                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--color-accent-primary)' }}>Retail</h3>
                                    <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>Investment Amount &lt; INR 12,00,000 per year</p>
                                    <p style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: '1rem' }}>INR 24,000 per year + 18% GST</p>
                                    <p style={{ fontSize: '0.9rem', marginBottom: '1.5rem' }}>Email and Call Support.</p>
                                    <a href="https://razorpay.me/@smartsyncservices?amount=eh3jhVdIy2W8Wc3l4sF8AQ%3D%3D" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem', display: 'inline-block', textDecoration: 'none' }}>Sign Up</a>
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--color-accent-primary)' }}>HNI</h3>
                                    <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>Investment Amount &gt; INR 12,00,000 per year</p>
                                    <p style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: '1rem' }}>1.5% of AUM + 18% GST</p>
                                    <p style={{ fontSize: '0.9rem', marginBottom: '1.5rem' }}>Exclusive Access to Detailed Research of Portfolio Holding Companies. Email and Call Support.</p>
                                    <button className="btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}>Sign Up</button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <AnimatePresence>
                {isModalOpen && (
                    <div style={{ position: 'fixed', inset: 0, zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
                        <motion.div
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            style={{ position: 'absolute', inset: 0, background: 'rgba(26,26,26,0.5)', backdropFilter: 'blur(4px)' }}
                            onClick={() => setIsModalOpen(false)}
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ duration: 0.3 }}
                            style={{ position: 'relative', background: 'var(--color-bg-base)', padding: '2.5rem', width: '100%', maxWidth: '500px', border: '1px solid rgba(26,26,26,0.1)', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                        >
                            <button onClick={() => setIsModalOpen(false)} style={{ position: 'absolute', top: '1rem', right: '1rem', color: 'var(--color-text-secondary)' }}>
                                <X size={24} />
                            </button>
                            <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', fontWeight: 600 }}>Schedule a Call</h2>
                            <p style={{ color: 'var(--color-text-secondary)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>Drop your details and we'll connect with you to discuss your portfolio.</p>

                            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {submitStatus.success !== null && (
                                    <div style={{ padding: '0.75rem', background: submitStatus.success ? 'rgba(76, 175, 80, 0.1)' : 'rgba(244, 67, 54, 0.1)', color: submitStatus.success ? '#2e7d32' : '#d32f2f', border: `1px solid ${submitStatus.success ? 'rgba(76, 175, 80, 0.3)' : 'rgba(244, 67, 54, 0.3)'}`, borderRadius: '4px', fontSize: '0.9rem' }}>
                                        {submitStatus.message}
                                    </div>
                                )}
                                <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Full Name" required style={{ padding: '0.875rem', border: '1px solid rgba(26,26,26,0.2)', background: 'transparent', font: 'inherit', outline: 'none' }} />
                                <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email Address" required style={{ padding: '0.875rem', border: '1px solid rgba(26,26,26,0.2)', background: 'transparent', font: 'inherit', outline: 'none' }} />
                                <input type="hidden" name="inquiryType" value="Inquiring about Model Portfolio" />
                                <textarea name="message" value={formData.message} onChange={handleInputChange} placeholder="Additional details (Optional)" rows="3" style={{ padding: '0.875rem', border: '1px solid rgba(26,26,26,0.2)', background: 'transparent', font: 'inherit', outline: 'none', resize: 'vertical' }}></textarea>
                                <button type="submit" className="btn-primary" disabled={isSubmitting} style={{ width: '100%', justifyContent: 'center', opacity: isSubmitting ? 0.7 : 1 }}>
                                    {isSubmitting ? 'Submitting...' : 'Request Call'}
                                </button>
                            </form>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </main>
    );
};

export default ModelPortfolio;
