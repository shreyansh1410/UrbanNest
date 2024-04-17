import React, { useContext, useState } from "react";
import "./navbar.scss";
// import { userData } from "../../lib/dummydata";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {currentUser} = useContext(AuthContext);
  // const user = true;
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
        {currentUser ? (
          <div className="user">
            <img src={currentUser.avatar || "/noavatar.png"} alt="" />
            <span>{currentUser.username}</span>
            <Link to="/profile" className="profileLink">
              <div className="notification">3</div>
              Profile
            </Link>
          </div>
        ) : (
          <>
            <a href="/login" className="">
              Sign In
            </a>
            <a href="/register" className="signup">
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
