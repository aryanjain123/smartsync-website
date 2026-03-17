import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    window.scrollTo(0, 0);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="logo">
          <img
            src="/favicon.png"
            alt="SmartSync Logo"
            className="logo-image"
            style={{ height: '72px', width: 'auto', display: 'block' }}
          />
        </Link>

        <nav className="desktop-nav">
          <div className="nav-item has-dropdown">
            <span className="nav-link">Advisory Services <ChevronDown size={14} className="dropdown-icon" /></span>
            <div className="dropdown-menu">
              <Link to="/model-portfolio" className="dropdown-link">Model Portfolio</Link>
              <Link to="/flexi-cap-advisory-services" className="dropdown-link">Flexi-Cap Advisory Services</Link>
            </div>
          </div>

          <a href="https://mission-smile.learnyst.com/learn/account/signin" className="nav-link" target="_blank" rel="noopener noreferrer">MissioN S.M.I.L.E</a>
          <Link to="/blog" className="nav-link">Blog</Link>

          <div className="nav-item has-dropdown">
            <span className="nav-link">About <ChevronDown size={14} className="dropdown-icon" /></span>
            <div className="dropdown-menu">
              <Link to="/about-us" className="dropdown-link">About Us</Link>
              <Link to="/our-team" className="dropdown-link">Our Team</Link>
              <Link to="/client-testimonials" className="dropdown-link">Client Testimonials</Link>
            </div>
          </div>

          <div className="nav-item has-dropdown">
            <span className="nav-link">SEBI Compliance <ChevronDown size={14} className="dropdown-icon" /></span>
            <div className="dropdown-menu">
              <Link to="/investor-charter" className="dropdown-link">Investor Charter</Link>
              <Link to="/monthly-disclosures" className="dropdown-link">Monthly Disclosures</Link>
              <Link to="/complaint-redressal" className="dropdown-link">Complaint Redressal & SCORES</Link>
            </div>
          </div>

          <Link to="/contact-us" className="nav-link">Contact Us</Link>
        </nav>

        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <AnimatePresence mode="wait">
            {mobileMenuOpen ? (
              <motion.div key="close" initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 90 }} transition={{ duration: 0.2 }}>
                <X size={24} />
              </motion.div>
            ) : (
              <motion.div key="menu" initial={{ opacity: 0, rotate: 90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: -90 }} transition={{ duration: 0.2 }}>
                <Menu size={24} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="mobile-nav"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="mobile-nav-content">
              <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>

              <div className="mobile-nav-group">
                <span className="mobile-nav-title">Advisory Services</span>
                <Link to="/model-portfolio" onClick={() => setMobileMenuOpen(false)}>Model Portfolio</Link>
                <Link to="/flexi-cap-advisory-services" onClick={() => setMobileMenuOpen(false)}>Flexi-Cap Advisory Services</Link>
              </div>

              <a href="https://mission-smile.learnyst.com/learn/account/signin" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)} target="_blank" rel="noopener noreferrer">MissioN S.M.I.L.E</a>
              <Link to="/blog" onClick={() => setMobileMenuOpen(false)}>Blog</Link>

              <div className="mobile-nav-group">
                <span className="mobile-nav-title">About</span>
                <Link to="/about-us" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
                <Link to="/our-team" onClick={() => setMobileMenuOpen(false)}>Our Team</Link>
                <Link to="/client-testimonials" onClick={() => setMobileMenuOpen(false)}>Client Testimonials</Link>
              </div>

              <div className="mobile-nav-group">
                <span className="mobile-nav-title">SEBI Compliance</span>
                <Link to="/investor-charter" onClick={() => setMobileMenuOpen(false)}>Investor Charter</Link>
                <Link to="/monthly-disclosures" onClick={() => setMobileMenuOpen(false)}>Monthly Disclosures</Link>
                <Link to="/complaint-redressal" onClick={() => setMobileMenuOpen(false)}>Complaint Redressal</Link>
              </div>

              <Link to="/contact-us" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
