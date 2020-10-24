import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbars.scss";

const Navbars = () => {
  const [click, setClick] = useState(false);

  // handle navbar hamburger toggle
  const handleClick = () => setClick(!click);
  // const closeMobileMenu = ()=> setClick(false)

  useEffect(() => {
    window.addEventListener("scroll", checkScroll);
  }, []);

  const checkScroll = () => {
    const navbars = document.getElementById("navbars");
    const page = window.pageYOffset >= 720;
    if (page) {
      navbars.classList.add("sticky");
    } else {
      navbars.classList.remove("sticky");
    }
  };
  return (
    <nav className="navbar" id="navbars">
      <Link to="/" className="navbar-logo-mobile">
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
