import React from "react";
import "./Payment.css";

function Payment() {
  return (
    <div className="payment">
      <div className="container5">
        <div className="payment-feature">
          <p className="p1">OUR FEATURE</p>
          <h1 className="p2">All payments can be managed from one account</h1>
          <p className="p3">
            Why kept very ever home mrs. Considered sympathize ten uncommonly
            occasional assistance sufficient not. Letter of on become he tended
            active enable to.
          </p>
          <button>Get Started</button>
        </div>

        <div className="card">
            <img src={require("../../assets/image-3.png")} alt="img3" height="400px"/>
        </div>
      </div>
    </div>
  );
}

export default Payment;
