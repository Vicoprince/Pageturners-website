import React from 'react';
import './services.css';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <>
      <div className="Service-section">
        <div className="service-banner-section">
          <img
            src="./pageturners-banner.jpg"
            alt="Who we do banner"
            className="img-banner"
          />
        </div>

        <div className="services-container">
          <header>
            <h1>Welcome to Pageturners</h1>
            <p>Your Destination for Great Reads</p>
          </header>

          <section className="service-category">
            <div className="service-details">
              <h2>Personal Development</h2>
              <p>
                Explore books that help you grow personally and professionally.
              </p>
            </div>
          </section>

          <section className="service-category">
            <div className="service-details">
              <h2>Spiritual Development</h2>
              <p>
                Discover books that nourish your spirit and inspire mindfulness.
              </p>
            </div>
          </section>

          <section className="service-category">
            <div className="service-details">
              <h2>Business</h2>
              <p>
                Get insights from business bestsellers and industry experts.
              </p>
            </div>
          </section>

          <section className="service-category">
            <div className="service-details">
              <h2>Informative Books</h2>
              <p>Expand your knowledge with our informative book collection.</p>
            </div>
          </section>

          <section className="featured-service">
            <div className="service-image">
              <img
                src="./journal00.png"
                alt="Manifestation Journal"
              />
            </div>
            <div className="service-details">
              <h2>The Manifestation Journal</h2>
              <p>
                Immerse yourself in daily journalling, plan your day
                effectively, and embrace positive affirmations with our latest
                release.
              </p>
              <Link to="/Contact">
                <button className="cta-button">Learn More</button>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Services