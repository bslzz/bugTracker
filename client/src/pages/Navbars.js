import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";

import "./Navbars.scss";

const Navbars = () => {
  const [click, setClick] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [showLogo, setShowLogo] = useState(false);

  // handle navbar hamburger toggle
  const handleClick = () => setClick(!click);
  // const closeMobileMenu = ()=> setClick(false)

  useEffect(() => {
    window.addEventListener("scroll", checkScroll);
  }, []);
  //show/hide logo
  useEffect(() => {
    window.addEventListener("scroll", checkLogo);
  }, []);
  const checkLogo = () => {
    const logos = window.pageYOffset >= 800;
    return logos ? setShowLogo(true) : setShowLogo(false);
  };

  const logoShow = () => {
    if (showLogo) {
      return {
        color: "white",
      };
    } else
      return {
        visibility: "hidden",
       
      };
  };

  const checkScroll = () => {
    const page = window.pageYOffset >= 800;
    return page ? setSticky(true) : setSticky(false);
  };

  //sticky navbar
  const navBarStyle = () => {
    if (sticky) {
      return {
        position: "fixed",
        width: "100%",
        transition: "all 3s ease-in-out",
      };
    }
  };

  return (
    <nav className="navbar" id="navbars" style={navBarStyle() || logoShow()}>
      <Logo />
      <div className="menu-icon" onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"} />
      </div>

      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
          <Link to="#features" className="nav_link">
            Features
          </Link>
        </li>
        <li className="nav-item">
          <Link to="#guide" className="nav_link">
            Product guide
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/features"
            // className="nav-links  nav-links-mobile"
            className="nav_link sign-up-button"
          >
            Get Started
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbars;
