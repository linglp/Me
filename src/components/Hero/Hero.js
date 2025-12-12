import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" style={{ '--bg-image': `url(${process.env.PUBLIC_URL}/images/backdrop.webp)` }}>
      <h1>Welcome to My Portfolio</h1>
      <h2>Lingling Peng</h2>
      <a href="#projects" className="cta">View My Projects</a>
    </section>
  );
};

export default Hero;
