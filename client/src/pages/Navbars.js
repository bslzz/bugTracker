import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbars.scss";

const Navbars = () => {
    const [click, setClick] = useState(false);
    
    // handle navbar hamburger toggle 
    const handleClick = () => setClick(!click);
    const closeMobileMenu = ()=> setClick(false)
  return (
    // <div className="navbar-container">
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        EPIC
      </Link>
      <div className="menu-icon" onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"} />
      </div>

      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
          <Link to="/login" className="nav-links">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/register" className="nav-links">
            Register as Admin
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbars;
