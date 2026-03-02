import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Linkedin, Twitter, Instagram, Youtube, Phone } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer" id="contact">
            <div className="container">
                <div className="footer-grid">

                    <div className="footer-brand">
                        <h2 className="footer-logo">SmartSync</h2>
                        <p className="footer-slogan">Always in Sync with Your Investment Needs.</p>
                        <div className="social-links">
                            <a href="#" className="social-link"><Twitter size={20} /></a>
                            <a href="#" className="social-link"><Linkedin size={20} /></a>
                            <a href="#" className="social-link"><Youtube size={20} /></a>
                            <a href="#" className="social-link"><Instagram size={20} /></a>
                        </div>
                    </div>

                    <div className="footer-links-group">
                        <h4 className="footer-title">Advisory Services</h4>
                        <Link to="/model-portfolio" className="footer-link">Model Portfolio</Link>
                        <Link to="/stock-advisory" className="footer-link">Stock Advisory Services</Link>
                        <a href="https://missionsmile.smartsyncservices.com/learn" target="_blank" rel="noopener noreferrer" className="footer-link">MissioN S.M.I.L.E</a>
                        <Link to="/blog" className="footer-link">Blog</Link>
                    </div>

                    <div className="footer-links-group">
                        <h4 className="footer-title">Company</h4>
                        <Link to="/about-us" className="footer-link">About Us</Link>
                        <Link to="/our-team" className="footer-link">Our Team</Link>
                        <Link to="/client-testimonials" className="footer-link">Client Testimonials</Link>
                        <Link to="/contact-us" className="footer-link">Contact Us</Link>
                    </div>

                    <div className="footer-links-group">
                        <h4 className="footer-title">SEBI Compliance</h4>
                        <Link to="/investor-charter" className="footer-link">Investor Charter</Link>
                        <Link to="/monthly-disclosures" className="footer-link">Monthly Disclosures</Link>
                        <Link to="/complaint-redressal" className="footer-link">Complaint Redressal & SCORES</Link>
                        <a href="mailto:ankit.k@smartsyncservices.com" className="footer-link highlight">ankit.k@smartsyncservices.com</a>
                    </div>

                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} SmartSync Services. SEBI Registered Investment Advisory firm (INA000007881).</p>
                    <div className="footer-legal">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
