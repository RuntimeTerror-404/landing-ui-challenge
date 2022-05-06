import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="container1">
        <div className="name-container">
          <p className="name">AR SHAKIR</p>
        </div>

        <div className="mid-header">
          <p>
            Product<span> ˅</span>
          </p>
          <p>
            Template<span> ˅</span>
          </p>
          <p>Blog</p>
          <p>Pricing</p>
        </div>

        <div className="last-header">
          <p>Sign In</p>
          <div><button>Start Free</button></div>
        </div>
      </div>
    </div>
  );
}

export default Header;
