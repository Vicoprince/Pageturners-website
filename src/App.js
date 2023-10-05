import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Footer from './components/Footer/Footer';
import Services from './Pages/Our services/Services';
import Contact from './Pages/Contact/Contact';
import { ToastContainer } from 'react-toastify';


const App = () => {
  return (
    <>
                <ToastContainer></ToastContainer>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Service" element={<Services />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App