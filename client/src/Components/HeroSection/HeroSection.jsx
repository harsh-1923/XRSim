import React from "react";
import "./HeroSection.css";
import HeroSectionBg from "../../Assets/HeroSection-bg.png";

const HeroSection = () => {
  return (
    <div className="hero-section-wrapper">
      <div className="hero-section-content">
        <div className="hero-section-content-text">
          <h2 className="tag-line"> We bring </h2>
          <h2 className="main-line">Virtual Reality</h2>
          <h2 className="tag-line"> to your doorsteps</h2>
        </div>

        <button className="btn-contact">
          <h4 style={{ fontWeight: "bold" }}>Contact Us</h4>
        </button>

        <button className="btn-contact">
          <h4 style={{ fontWeight: "bold" }}>Request quote</h4>
        </button>
      </div>

      <div className="hero-section-img">
        <img src={HeroSectionBg} />
      </div>
    </div>
  );
};

export default HeroSection;
