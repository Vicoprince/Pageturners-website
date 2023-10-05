import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-section">
      <div>
        <h1 className="hero-title">
          A Sanctuary for <br />Every 
          <span> Book Lover</span>
        </h1>
        <p className="hero-sub-text">When you open a book, you open your mind to many things.</p>
      </div>
      <div>
        <img src="./hero-pic.png" alt="hero" className="hero-pic" />
      </div>
      </div>
  );
}

export default Hero