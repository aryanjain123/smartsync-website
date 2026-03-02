import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
    {
        text: "Mission SMILE is a well-thought-out platform for investment enthusiasts providing quality curated content. Always look forward to reading their updates, be it on businesses or investment frameworks. The owners put in a lot of effort to constantly come up with interesting topics to talk about. Thanking the team and wishing them future success!",
        author: "Ashish Kila",
        title: "Accomplished value investor, Owner Perfect Group and CIO Perfect Research."
    },
    {
        text: "I know Ankit, our AK, since 2015. He warned me that pharma bullishness will wane soon. I didn't listen to him - consequence - my pharma basket was down down down. Some of them I sold at a loss. Some made profits after 5 years of wait. He is a pure fundamental investor - dives deep & then advises. What I like most is he is down to earth, friendly, available to help. God Bless him.",
        author: "Dr. M P Bajaj",
        title: "Renowned paediatrician in Northeast India."
    },
    {
        text: "The energy, enthusiasm, and commitment displayed by SSS and Ankit Kanodia are commendable. They have maintained consistent transparency in handling my investments and have continually engaged with me to ensure we leverage each opportunity in the market. I strongly recommend SSS to all investors - first time or seasoned experts - as this team definitely delivers more than they promise.",
        author: "Amrita Das",
        title: "Strategy Manager, Amazon India."
    }
];

const Testimonials = () => {
    return (
        <section className="testimonials section" id="testimonials">
            <div className="container">
                <motion.div
                    className="section-header center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title text-gradient">Client Testimonials</h2>
                    <p className="section-subtitle">Read what our clients have to say about our guidance and principles.</p>
                </motion.div>

                <div className="testimonials-grid">
                    {testimonials.map((t, idx) => (
                        <motion.div
                            className="testimonial-card"
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: idx * 0.15 }}
                        >
                            <Quote className="quote-icon" size={48} />
                            <p className="testimonial-text">&ldquo;{t.text}&rdquo;</p>
                            <div className="testimonial-author-info">
                                <h4 className="testimonial-author">{t.author}</h4>
                                <span className="testimonial-author-title">{t.title}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
