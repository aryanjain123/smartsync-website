import React from 'react';
import { BrowserRouter as Router, Routes, Route, ScrollRestoration } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import MissionSmile from './pages/MissionSmile';
import ContactUs from './pages/ContactUs';
import ModelPortfolio from './pages/ModelPortfolio';
import FlexiCapAdvisory from './pages/FlexiCapAdvisory';
import OurTeam from './pages/OurTeam';
import InvestorCharter from './pages/InvestorCharter';
import ComplaintRedressal from './pages/ComplaintRedressal';
import MonthlyDisclosures from './pages/MonthlyDisclosures';
import ClientTestimonials from './pages/ClientTestimonials';
import Blog from './pages/Blog';
import NotFound from './pages/NotFound';
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
        <Route path="/flexi-cap-advisory-services" element={<FlexiCapAdvisory />} />
        <Route path="/mission-smile" element={<MissionSmile />} />
        <Route path="/learn" element={<MissionSmile />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/investor-charter" element={<InvestorCharter />} />
        <Route path="/monthly-disclosures" element={<MonthlyDisclosures />} />
        <Route path="/complaint-redressal" element={<ComplaintRedressal />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
