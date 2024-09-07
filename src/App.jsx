import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar/Navbar';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Portfolio from './components/Portofolio/Portofolio';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
