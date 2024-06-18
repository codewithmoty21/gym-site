import React from 'react';
import './Hero.css';
import heroImage from './hero-image.jpg'; // Add a hero image in the src/components folder

const Hero = () => {
  return (
    <section className="hero" id="home">
      <img src={heroImage} alt="Hero" className="hero-image" />
      <div className="hero-text">
        <h1>Welcome to GymSite</h1>
        <p>Get fit. Stay healthy. Live better.</p>
        <a href="#programs" className="cta-button">Explore Programs</a>
      </div>
    </section>
  );
};

export default Hero;
