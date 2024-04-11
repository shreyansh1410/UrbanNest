import React from "react";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <a href="/">
          <img src= "/logo.png"></img>
          <span>Lama Estate</span>
        </a>
      </div>
      <div className="right">Right</div>
    </div>
  );
};

export default Navbar;
