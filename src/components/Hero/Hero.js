import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
      <div className="container2">
        <div className="heading">
          <h1>Managing your crypto portfolio has never been easier</h1>
          <p>
            End-to-end payments and financial management in a single solution.
            Meet the right platform to help realize.
          </p>
        </div>

        <div className="heading-2">
          <div>
            <button>Get Started</button>
          </div>
          <div className="image">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScbF7fbqI9aN7iKNax8oPKfYaCma7qsO_QkCb_WPI2jeh8WUTJ06oL3B9VccI4z1G7oC4&usqp=CAU"
              height="40px"
            />
            <p>See How It Works</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
