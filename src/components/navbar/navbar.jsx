import React, { useState } from "react";
import "./navbar.scss";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.png"></img>
          <span className="logotext">Urban Nest</span>
        </a>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Agents</a>
      </div>

      <div className="right">
        <a href="/" className="">
          Sign In
        </a>
        <a href="/" className="signup">
          Sign Up
        </a>
        <div className="menuIcon">
          <img src="/menu.png" alt="hamburger" onClick={() => {setIsMenuOpen(!isMenuOpen)}}/>
        </div>
        <div className={isMenuOpen? "menuItems active" : "menuItems"}>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Agents</a>
          <a href="/">Sign In</a>
          <a href="/">Sign Up</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
