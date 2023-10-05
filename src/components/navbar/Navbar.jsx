import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="logo-link">
          <img src="./logo.png" className="logo" alt="pageturners logo" />
        </Link>
        <ul className="nav-links">
          <li className="nav-items">
            <Link className="nav-lnks" to="/">
              Home
            </Link>
          </li>
          <li className="nav-items">
            <Link className="nav-lnks" to="/About">
              Who we are
            </Link>
          </li>
          <li className="nav-items">
            <Link className="nav-lnks" to="/Service">
              What we do
            </Link>
          </li>
          <li className="nav-items">
            <Link className="nav-lnks" to="/Contact">
              Our Contact
            </Link>
          </li>
        </ul>
        <Link
          to="https://tinyurl.com/w9apfac4"
          className="action-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Join Us
        </Link>

        <div className="menu-bar">
          <MenuRoundedIcon
            className="menu-icon"
            style={{ fontSize: "2rem" }}
            onClick={toggleNavbar}
          />
        </div>
      </nav>

      <ul className={`dropdown-menu ${isOpen ? "open" : ""}`}>
        <li className="nav-items">
          <Link className="nav-lnks" to="/">
            Home
          </Link>
        </li>
        <li className="nav-items">
          <Link className="nav-lnks" to="/About">
            Who we are
          </Link>
        </li>
        <li className="nav-items">
          <Link className="nav-lnks" to="/Service">
            What we do
          </Link>
        </li>
        <li className="nav-items">
          <Link className="nav-lnks" to="/Contact">
            Our Contact
          </Link>
        </li>
        <li className="nav-items">
          <Link
            to="https://tinyurl.com/w9apfac4"
            className="nav-lnks"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="dropdown-action-btn">Join Us</button>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
