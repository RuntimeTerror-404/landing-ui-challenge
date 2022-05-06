import React from "react";
import "./Portfolio.css";
// import image-1 from "../../assets/image-1.png";

function Portfolio() {
  return (
    <div className="portfolio">
      <img src={require("../../assets/image1.png")} height="400px" className="port"/>
    </div>
  );
}

export default Portfolio;
