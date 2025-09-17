import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import TargetMarkets from './components/TargetMarkets';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Stats from './components/Stats';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ServicesPage from './pages/Services';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import IndustriesPage from './pages/Industries';

const HomePage = () => (
  <div className="min-h-screen bg-white">
    <Header />
    <Hero />
    <Stats />
    <Services />
    <TargetMarkets />
    <About />
    <Testimonials />
    <Contact />
    <Footer />
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/industries" element={<IndustriesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;