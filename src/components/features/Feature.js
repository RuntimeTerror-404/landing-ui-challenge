import React from "react";
import "./Feature.css";

function Feature() {
  return (
    <div className="feature">
      <div className="container3">
        <img src={require("../../assets/image-2.png")} height="450px" />
        <div className="desc">
          <p className="p1">OUR FEATURE</p>
          <h1 className="p2">All of your portfolios are linked to your AR Shakir account</h1>
          <p className="p3">
            Why kept very ever home mrs. Considered sympathize ten uncommonly
            occasional assistance sufficient not. Letter of on become he tended
            active enable to.
          </p>
          <button>Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Feature;
