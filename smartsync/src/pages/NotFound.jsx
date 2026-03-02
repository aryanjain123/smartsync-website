import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, ArrowRight } from 'lucide-react';

const NotFound = () => {
    return (
        <main className="page-wrapper" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <section className="section" style={{ width: '100%' }}>
                <div className="container" style={{ textAlign: 'center' }}>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <h1 style={{
                            fontSize: 'clamp(6rem, 15vw, 12rem)',
                            fontWeight: 800,
                            lineHeight: 1,
                            color: 'var(--color-primary)',
                            opacity: 0.1,
                            fontFamily: 'var(--font-display)',
                            margin: 0
                        }}>
                            404
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        style={{ marginTop: '-3rem', position: 'relative', zIndex: 2 }}
                    >
                        <h2 className="hero-title" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1rem' }}>
                            Page Not <span className="text-accent">Found</span>
                        </h2>

                        <p className="hero-subtitle" style={{ maxWidth: '600px', margin: '0 auto 3rem auto' }}>
                            We couldn't find the page you're looking for. It might have been moved, deleted, or perhaps the URL was mistyped.
                        </p>

                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Link to="/" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Home size={18} />
                                Back to Home
                            </Link>
                            <Link to="/contact-us" className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                                Contact Support
                                <ArrowRight size={18} />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
};

export default NotFound;
