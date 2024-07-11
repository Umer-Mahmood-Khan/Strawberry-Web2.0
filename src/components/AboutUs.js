// src/components/AboutUs.js
import React from 'react';
import './AboutUs.css'; // Import the CSS file for AboutUs
import ruchi from '../assets/ruchi.png'; // Replace with actual image paths
import umer from '../assets/umer (1).png';
//import bhavya from '../assets/bhavya.png';
//import chandana from '../assets/chandana.png';

const AboutUs = () => {
  return (
    <section id="about-us">
      <div className="about-us-content">
        <h1>ABOUT US</h1>
        <p>
          Welcome to BerryFinder, your premier destination for strawberry identification and knowledge! 
          At BerryFinder, our passion for strawberries goes beyond the ordinary. We are dedicated to 
          helping enthusiasts, gardeners, farmers, and consumers alike identify and learn about the 
          various strawberry varieties that grace our tables and gardens.
        </p>
      </div>
      <div className="team-members">
        <h2>TEAM MEMBERS</h2>
        <div className="members">
          <div className="member">
            <img src={ruchi} alt="Ruchi" />
            <p>RUCHI</p>
          </div>
          <div className="member">
            <img src={umer} alt="Omer" />
            <p>UMER</p>
          </div>
          <div className="member">
            <img src={ruchi} alt="Bhavya" />
            <p>BHAVYA</p>
          </div>
          <div className="member">
            <img src={ruchi} alt="Chandana" />
            <p>CHANDANA</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
