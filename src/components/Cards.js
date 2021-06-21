import React from "react";
import Carditem from "./Carditem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these beauty products</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <Carditem
              src="images/lipgloss.jpg"
              text="Lip Gloss"
              label="Beauty"
              path="/services"
            />
            <Carditem
              src="images/paint.jpg"
              text="Lip Stick"
              label="Beauty"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <Carditem
              src="images/chanel.jpg"
              text="Lip Powder"
              label="Beauty"
              path="/services"
            />
            <Carditem
              src="images/brown.jpg"
              text="Lip Balm"
              label="Beauty"
              path="/services"
            />
            <Carditem
              src="images/brush.jpg"
              text="Facial Brush"
              label="Beauty"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
