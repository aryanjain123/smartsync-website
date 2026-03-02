import React from 'react';
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
                        <a href="#" className="footer-link">Model Portfolio</a>
                        <a href="#" className="footer-link">Stock Advisory Services</a>
                        <a href="#" className="footer-link">MissioN S.M.I.L.E</a>
                        <a href="#" className="footer-link">Blog</a>
                    </div>

                    <div className="footer-links-group">
                        <h4 className="footer-title">Company</h4>
                        <a href="#" className="footer-link">About Us</a>
                        <a href="#" className="footer-link">Our Team</a>
                        <a href="#" className="footer-link">Client Testimonials</a>
                        <a href="#" className="footer-link">Contact Us</a>
                    </div>

                    <div className="footer-links-group">
                        <h4 className="footer-title">SEBI Compliance</h4>
                        <a href="#" className="footer-link">Investor Charter</a>
                        <a href="#" className="footer-link">Monthly Disclosures</a>
                        <a href="#" className="footer-link">Complaint Redressal & SCORES</a>
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
