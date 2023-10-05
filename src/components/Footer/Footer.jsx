import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="footer-logo">
        <img src="./logo-white.png" alt="white logo" />
      </div>
      <div className="footer-links">
        <h3 className="quick-links">Quick Links</h3>
        <ul className="link-list">
          <li className="link-item">
            <Link className="lnk" to="/">
              Home
            </Link>
          </li>
          <li className="link-item">
            <Link className="lnk" to="/About">
              Who we are
            </Link>
          </li>
          <li className="link-item">
            <Link className="lnk" to="/Service">
              What we do
            </Link>
          </li>
          <li className="link-item">
            <Link className="lnk" to="/Contact">
              Our Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="footer-socials">
        <h3 className="social-links">Social Links</h3>
        <ul className="socials-list">
          <li className="socials-item">
            <Link
              className="slnk"
              to="https://instagram.com/pageturners.afrika?igshid=MzRlODBiNWFlZA=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon /> Instagram
            </Link>
          </li>
          <li className="socials-item">
            <Link
              className="slnk"
              to="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon /> Twitter
            </Link>
          </li>
          <li className="socials-item">
            <Link
              className="slnk"
              to="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon /> Facebook
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer