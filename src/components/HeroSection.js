import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video.mp4" autoPlay loop muted />
      <h1>BEAUTIFY YOUR FACE</h1>

      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          VIEW MAKEUP
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          ORDER
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
