// src/components/Banner.js
import React from 'react';
import './Banner.css';

const Banner = ({ userEmail }) => {
  return (
    <section className="banner">
      <div className="banner-content">
        {userEmail && <p className="welcome-message">Welcome, {userEmail}!</p>}
        <h1 className="title">ALL STRAWBERRY VARIETIES</h1>
        <p className="subtitle">
          Washington is home to over 30 types of strawberry that range in flavor, texture, and color. They all have a few things in common. You can count on every Washington strawberry to be juicy, nutritious, and delicious.
        </p>
      </div>
    </section>
  );
};

export default Banner;
