import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
    {
        quote: "Mission SMILE is a well-thought-out platform for investment enthusiasts providing quality curated content. Always look forward to reading their updates, be it on businesses or investment frameworks. The owners put in a lot of effort to constantly come up with interesting topics to talk about. Thanking the team and wishing them future success!",
        author: "Ashish Kila",
        descriptor: "Accomplished value investor, Owner Perfect Group and CIO Perfect Research"
    },
    {
        quote: "The energy, enthusiasm, and commitment displayed by SSS is commendable. They have maintained consistent transparency in handling my investments and have continually engaged with me to ensure we leverage each opportunity in the market. I strongly recommend SSS to all investors – first time or seasoned experts – as this team definitely delivers more than they promise.",
        author: "Amrita Das",
        descriptor: "Strategy Manager, Amazon India"
    },
    {
        quote: "Management of health should be the utmost priority in life and self-medication is not the right thing. We always trust our health management to medical professionals. Wealth management should also be a priority in life, and it cannot be done by self alone. The best practice is to entrust the job of managing your wealth to the best professionals in the field & I am happy that I could find the best professionals with SSS.",
        author: "Madhu Menon",
        descriptor: "Director, Anala Outdoors"
    },
    {
        quote: "Smart Sync Services team provides a valuable service for investors looking to up their game via insightful stock research, great seminars, and equally importantly, a growing community of smart investors to interact with. Looking forward to seeing Smart Sync Services reach greater heights.",
        author: "Rohit Khanna",
        descriptor: "Investor"
    },
    {
        quote: "I know Ankit, our AK, since 2015. He warned me that pharma bullishness will wane soon. I didn’t listen to him – consequence – my pharma basket was down down down. He is a pure fundamental investor – dives deep & then advises. What I like most is he is down to earth, friendly, available to help. God Bless him.",
        author: "Dr. M P Bajaj",
        descriptor: "Renowned paediatrician in Northeast India"
    }
];

const ClientTestimonials = () => {
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
                        <h1 className="hero-title" style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)' }}>Client <span className="text-accent">Testimonials</span></h1>
                        <p className="hero-subtitle mb-0" style={{ maxWidth: '800px' }}>
                            Here is what our clients say about us!
                        </p>
                    </motion.div>

                    <div style={{ marginTop: '4rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem' }}>
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.1 * index }}
                                style={{ background: 'var(--color-bg-surface)', padding: '3rem', border: '1px solid rgba(26, 26, 26, 0.1)', display: 'flex', flexDirection: 'column' }}
                            >
                                <div style={{ color: 'var(--color-accent-primary)', fontSize: '3rem', lineHeight: 1, marginBottom: '1rem', fontFamily: 'var(--font-display)' }}>“</div>
                                <p style={{ fontSize: '1.05rem', lineHeight: 1.7, flexGrow: 1, marginBottom: '2rem', fontStyle: 'italic', color: 'var(--color-text-secondary)' }}>
                                    {testimonial.quote}
                                </p>
                                <div style={{ borderTop: '1px solid rgba(26, 26, 26, 0.1)', paddingTop: '1.5rem', marginTop: 'auto' }}>
                                    <h4 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '0.25rem' }}>{testimonial.author}</h4>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--color-accent-primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{testimonial.descriptor}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ClientTestimonials;
