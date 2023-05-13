import React from "react";
import Navbar from "./Navbar";
const Header = () => {
  return (
    <div className="banner">
      <Navbar />
      <div className="banner__content">
        <div className="container">
          <div className="banner__text">
            <h3>Pizza Delivery</h3>
            <h1>MAESTRO PIZINNI</h1>
            <p>
            Pizza is everyone's go-to food. No dinner? Order one. Got a big game coming up? Stack pizzas one after the other. Breakup? 
            </p>
            <div className="banner__btn">
              <a href="button" className="btn btn-smart">DELIVERY NOW</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
