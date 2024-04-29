import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-section">
        <h3>Explore</h3>
        <ul>
          <li><a href="About">About Us</a></li>
          <li><a href="#careers">Careers</a></li>
          <li><a href="#newsroom">Newsroom</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#investors">Investors</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Discover</h3>
        <ul>
          <li><a href="#ride">Ride</a></li>
          <li><a href="#drive">Drive</a></li>
          <li><a href="#eat">Eat</a></li>
          <li><a href="#freight">Freight</a></li>
          <li><a href="#business">Business</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Legal</h3>
        <ul>
          <li><a href="#terms">Terms of Use</a></li>
          <li><a href="#privacy">Privacy Policy</a></li>
          <li><a href="#accessibility">Accessibility</a></li>
          <li><a href="#do-not-sell">Do Not Sell My Info</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Support</h3>
        <ul>
          <li><a href="#help">Help Center</a></li>
          <li><a href="#safety">Safety Information</a></li>
          <li><a href="#community">Community Guidelines</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Connect</h3>
        <ul>
          <li><a href="facebook.com">Facebook</a></li>
          <li><a href="twitter.com">Twitter</a></li>
          <li><a href="instagram.com">Instagram</a></li>
          <li><a href="linkedin.com">LinkedIn</a></li>
          <li><a href="youtube.com">YouTube</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Download Our App</h3>
        <ul>
          <li><a href="https://www.apple.com/app-store/">App Store</a></li>
          <li><a href="#google-play">Google Play</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
