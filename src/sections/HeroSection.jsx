import React from "react";

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-image-container">
        <img
          src="/assets/images/hero-background.png"
          alt="Minimalistyczne wnętrze salonu"
        />
      </div>
      <div className="hero-content">
        <div className="hero-content-container">
          <h1 className="hero-title">AURA SPACES</h1>
          <p className="hero-tagline">Where design meets tranquility.</p>
          <button className="cta-button">EXPLORE PROJECTS</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
