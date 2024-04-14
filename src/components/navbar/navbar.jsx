import React, { useState } from "react";
import "./navbar.scss";
import { userData } from "../../lib/dummydata";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const user = true;
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
        {user ? (
          <div className="user">
            <img src={userData.img} alt="" />
            <span>{userData.name}</span>
            <Link to="/profile" className="profileLink">
              <div className="notification">3</div>
              Profile
            </Link>
          </div>
        ) : (
          <>
            <a href="/" className="">
              Sign In
            </a>
            <a href="/" className="signup">
              Sign Up
            </a>
          </>
        )}
        <div className="menuIcon">
          <img
            src="/menu.png"
            alt="hamburger"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          />
        </div>
        <div className={isMenuOpen ? "menuItems active" : "menuItems"}>
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
