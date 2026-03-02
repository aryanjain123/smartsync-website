import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        inquiryType: 'General Inquiry',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({ success: null, message: '' });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus({ success: null, message: '' });

        try {
            // Using relative path for testing, or API_URL in production. 
            // Vercel frontends hit relative URLs if backend is hosted same place, but here 
            // Railway backend implies an external API. Assuming Railway port config:
            const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000/api/contact';

            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.ok) {
                setSubmitStatus({ success: true, message: data.message || 'Your inquiry has been sent successfully!' });
                setFormData({ name: '', email: '', inquiryType: 'General Inquiry', message: '' });
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
                        <h1 className="hero-title" style={{ fontSize: 'clamp(3rem, 5vw, 4rem)' }}>Contact <span className="text-accent">Us</span></h1>
                        <p className="hero-subtitle mb-0" style={{ maxWidth: '800px' }}>
                            We are ready to synchronize with your financial goals. Let's talk.
                        </p>
                    </motion.div>

                    <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: '4rem', marginTop: '4rem' }}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            style={{ background: 'var(--color-bg-surface)', padding: '3rem', border: '1px solid rgba(26, 26, 26, 0.1)' }}
                        >
                            <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', fontWeight: 600 }}>Get In Touch</h2>

                            <div style={{ marginBottom: '1.5rem' }}>
                                <strong style={{ display: 'block', marginBottom: '0.25rem', fontFamily: 'var(--font-body)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Email</strong>
                                <a href="mailto:info@smartsyncservices.com" style={{ fontSize: '1.1rem', color: 'var(--color-accent-primary)', fontWeight: 500 }}>info@smartsyncservices.com</a>
                            </div>

                            <div style={{ marginBottom: '1.5rem' }}>
                                <strong style={{ display: 'block', marginBottom: '0.25rem', fontFamily: 'var(--font-body)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Phone</strong>
                                <a href="tel:+919876543210" style={{ fontSize: '1.1rem', color: 'var(--color-accent-primary)', fontWeight: 500 }}>+91 98765 43210</a>
                            </div>

                            <div style={{ marginBottom: '1.5rem' }}>
                                <strong style={{ display: 'block', marginBottom: '0.25rem', fontFamily: 'var(--font-body)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Office Address</strong>
                                <p style={{ fontSize: '1.05rem', lineHeight: 1.6 }}>
                                    SmartSync Services<br />
                                    123 Financial District, Suite 400<br />
                                    Mumbai, Maharashtra 400001<br />
                                    India
                                </p>
                            </div>
                        </motion.div>

                        <motion.form
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
                            onSubmit={handleSubmit}
                        >
                            <h2 style={{ fontSize: '1.75rem', marginBottom: '0.5rem', fontWeight: 600 }}>Send a Message</h2>
                            <p style={{ marginBottom: '1rem', color: 'var(--color-text-secondary)' }}>Fill out the form below and our advisory team will respond promptly.</p>

                            {submitStatus.success !== null && (
                                <div style={{
                                    padding: '1rem',
                                    background: submitStatus.success ? 'rgba(76, 175, 80, 0.1)' : 'rgba(244, 67, 54, 0.1)',
                                    color: submitStatus.success ? '#2e7d32' : '#d32f2f',
                                    border: `1px solid ${submitStatus.success ? 'rgba(76, 175, 80, 0.3)' : 'rgba(244, 67, 54, 0.3)'}`,
                                    borderRadius: '4px'
                                }}>
                                    {submitStatus.message}
                                </div>
                            )}

                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="Full Name"
                                style={{ padding: '1rem', border: '1px solid rgba(26, 26, 26, 0.2)', background: 'transparent', font: 'inherit', outline: 'none' }}
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="Email Address"
                                style={{ padding: '1rem', border: '1px solid rgba(26, 26, 26, 0.2)', background: 'transparent', font: 'inherit', outline: 'none' }}
                                required
                            />
                            <select
                                name="inquiryType"
                                value={formData.inquiryType}
                                onChange={handleInputChange}
                                style={{ padding: '1rem', border: '1px solid rgba(26, 26, 26, 0.2)', background: 'transparent', font: 'inherit', outline: 'none' }}
                            >
                                <option>Inquiring about Model Portfolio</option>
                                <option>Inquiring about Stock Advisory</option>
                                <option>General Inquiry</option>
                            </select>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                placeholder="Your Message"
                                rows="5"
                                style={{ padding: '1rem', border: '1px solid rgba(26, 26, 26, 0.2)', background: 'transparent', font: 'inherit', outline: 'none', resize: 'vertical' }}
                                required
                            ></textarea>
                            <button
                                type="submit"
                                className="btn-primary"
                                style={{ alignSelf: 'flex-start', border: 'none', opacity: isSubmitting ? 0.7 : 1 }}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                            </button>
                        </motion.form>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ContactUs;
