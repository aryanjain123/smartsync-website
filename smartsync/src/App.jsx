import React from 'react';
import { BrowserRouter as Router, Routes, Route, ScrollRestoration } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import MissionSmile from './pages/MissionSmile';
import ContactUs from './pages/ContactUs';
import ModelPortfolio from './pages/ModelPortfolio';
import StockAdvisory from './pages/StockAdvisory';
import OurTeam from './pages/OurTeam';
import InvestorCharter from './pages/InvestorCharter';
import ComplaintRedressal from './pages/ComplaintRedressal';
import MonthlyDisclosures from './pages/MonthlyDisclosures';
import ClientTestimonials from './pages/ClientTestimonials';
import Blog from './pages/Blog';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/client-testimonials" element={<ClientTestimonials />} />
        <Route path="/model-portfolio" element={<ModelPortfolio />} />
        <Route path="/stock-advisory-services" element={<StockAdvisory />} />
        <Route path="/mission-smile" element={<MissionSmile />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/investor-charter" element={<InvestorCharter />} />
        <Route path="/monthly-disclosures" element={<MonthlyDisclosures />} />
        <Route path="/complaint-redressal" element={<ComplaintRedressal />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
