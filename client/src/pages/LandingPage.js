import React, { useState, useEffect } from "react";
import Navbars from "./Navbars";
import { Link } from "react-router-dom";


//icons
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { SiLinkedin } from "react-icons/si";
import { IconContext } from "react-icons";

//assets
import hero from "./../assets/land.svg";
import info from "./../assets/info.svg";

import "./LandingPage.scss";

const LandingPage = () => {
  return (
    <div>
      {/* Hero banner */}
      <section className="hero-banner-container">
        <div className="content-wrapper">
          <div>
            <Link to="/" className="navbar-logo">
              Logo
            </Link>
            <div>
              <h1 className="hero-banner-intro">
                <br />
                Software BugTracker for <br />
                your every project
              </h1>

              <button className="call-to-action">SignUp</button>
            </div>
          </div>

          <img src={hero} className="hero-banner-image" />
        </div>
      </section>

      {/* Section 2 */}
      <div className="nav-wrap">
        <Navbars />
      </div>
      <div className="more-leads-wrap">
        <p className="more-leads">
          Sourcetree simplifies how you interact with your Git repositories so
          you can focus on coding. Visualize and manage your repositories
          through Sourcetree's simple Git GUI.
        </p>
      </div>
      <hr className="underline" />

      {/* Section 3 */}
      <section className="about-app-features">
        {/* <img src={info} className="sub-banner-image" alt="sub-banner-image" /> */}
        <div className="features-wrapper">
          <ul className="info-list">
            <li>Submit</li>
            <li>Track </li>
            <li> Resolve Issues </li>
          </ul>
        </div>
      </section>

      {/* Section 4 */}
      <section className="bug-trackers">
        <img src={info} className="sub-banner-image" alt="sub-banner-image" />

        <div className="support-message">
          <h2>Bug Tracking</h2>
          <span> It's easier to plan sprints efficiently</span>
          <span>when you use BlahBlaHbLAH</span>
          <span>
            Planner to view the capacities of your sprint, team, and team
          </span>
          <span>members and assign work accordingly.</span>
          <h2>Bug Tracking</h2>
          <span> It's easier to plan sprints efficiently</span>
          <span>when you use BlahBlaHbLAH</span>
          <span>
            Planner to view the capacities of your sprint, team, and team
          </span>
          <span>members and assign work accordingly.</span>
        </div>
      </section>

      {/* Section 5 */}
      <section className="bug-icons">
        <div>
          <h2 className="sub-heads">Bug Tracking</h2>
          <div className="featured-works">
            <img
              src={info}
              className="featured-works-image"
              alt="featured-works-image"
            />
            <img
              src={info}
              className="featured-works-image"
              alt="featured-works-image"
            />
            <img
              src={info}
              className="featured-works-image"
              alt="featured-works-image"
            />
            <img
              src={info}
              className="featured-works-image"
              alt="featured-works-image"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      
      <footer className="footer">
        <div className="footer-words">
          <ul>
            <li>About Logo</li>
            <li>Support</li>
            <li>Documentation</li>
            <li>Blog</li>
          </ul>
          <ul>
            <li>About Logo</li>
            <li>Support</li>
            <li>Documentation</li>
            <li>Blog</li>
          </ul>
          <div>
            <h4>Connect with us</h4>
            <IconContext.Provider
              value={{
                style: { color: "white" },
              }}
            >
              <FaFacebook />
              <AiFillTwitterCircle />
              <SiLinkedin />
            </IconContext.Provider>
          </div>
        </div>

        <p className="copyright">
          © 2002–2020 Buggy, LLC. Made with in Scottsdale, Arizona.
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
