// src/components/Footer.js
import React from 'react';
import './Footer.css';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
        <div className="footer-logo">
            <img src={logo} alt="Logo" />
          </div>
          <p className="footer-text">Look for the<br /><br /> Washington label</p>
          <button className="footer-button">Strawberry Suppliers</button>
        </div>
        <div className="footer-right">
          <ul className="footer-links">
            <li>About Washington Strawberry Commission</li>
            <li>Washington Strawberry License Plate</li>
            <li>News</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Washington Strawberry Commission</p>
        <ul className="footer-bottom-links">
          <li>Privacy Policy</li>
          <li>Terms of Use</li>
          <li>Records Index</li>
          <li>Non-Discrimination Statement</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
