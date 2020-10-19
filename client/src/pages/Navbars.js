import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbars.scss";

const Navbars = () => {
    const [click, setClick] = useState(false);
    
    // handle navbar hamburger toggle 
    const handleClick = () => setClick(!click);
    // const closeMobileMenu = ()=> setClick(false)
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        Logo
      </Link>
      <div className="menu-icon" onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"} />
      </div>

      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
          <Link to="#features" id="nav_link">
            Features
          </Link>
        </li>
        <li className="nav-item">
          <Link to="#guide" id="nav_link">
            Product guide
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/features" className="nav-links  nav-links-mobile">
            SignUp
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbars;
