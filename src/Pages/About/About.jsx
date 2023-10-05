import React from 'react';
import './About.css';

const About = () => {
  return (
    <>
      <div className="About-section">
        <div className="img-banner-section">
          <img
            src="./pageturners-banner.jpg"
            alt="Who we are banner"
            className="img-banner"
          />
        </div>

        <div className="about-brand">
          <div>
            <h1 className="about-title">About Brand</h1>
            <p className="brand-text">
              <span>PageTurners </span> is a hub for personal growth
              enthusiasts, journaling enthusiasts, lifelong learners, and
              self-improvement seekers. We dilligently achieve this through.
            </p>
            <ul className="brand-list">
              <li className="list-item">
                a hyper active community of achievers sharing common goal
              </li>
              <li className="list-item">a superbook store.</li>
              <li className="list-item">and a book club.</li>
            </ul>
            <p className="brand-txt">
              We offer self-help books that curate a diverse selection of
              inspiring, challenging, and empowering content.
            </p>
          </div>
          <div>
            <img src="./about01.png" alt="brand" className="about-img" />
          </div>
        </div>

        <div className="mission-sect">
          <div className="mission-wrapper">
            <div>
              <img src="./about02.png" alt="" className="mission-img" />
            </div>

            <div>
              <h1 className="mission-title">Mission</h1>
              <p className="mission-text">
                At <span>PageTurners, </span> our mission is to kindle personal development through the pages of books and the lines of journals. We're dedicated to providing thoughtfully curated collections that sparks self-improvement and growth. Our community fosters introspection, goal-setting, and continous learning, nurturing a habit of mindful journaling alongside passionate reading.
              </p>
            </div>
          </div>
        </div>

        <div className="vision-sect">
          <div className="vision-wrapper">
            <div>
              <h1 className="vision-title">Vision</h1>
                <p className="vision-text">
                  <span>PageTurners </span>aspires to be the cornerstone of global personal transformation. We envision a worldwide community of empowered <span>PageTurners </span>shaping destinies through immersive reading and mindful journaling.<br /><br />
                  We're creating a space where every turned page leads to a turned life-a haven where self-discovery is a way of life, and members inspire each other to new heights.
                </p>
            </div>
            <div>
              <img src="./about03.png" alt="" className="vision-img" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About