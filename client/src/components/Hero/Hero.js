import React from "react";
import "./Hero.css";
function Hero(props) {
  return (
    <div className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="left-hero-text">EMPO</h1>
          <span>
            <h1 className="right-hero-text">RIUM</h1>
          </span>
        </div>
        <div className="hero-para">
          <h1 style={{ color: "rgb(126, 205, 207)" }}>One-Step</h1>

          <h1 style={{ color: "rgb(255, 188, 199)" }}>From Fashion</h1>
        </div>
        <div className="hero-btn">
          <button>KNOW MORE</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
