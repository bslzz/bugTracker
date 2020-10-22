import React, { useState, useEffect } from "react";
import Navbars from "./Navbars";
import { Link } from "react-router-dom";

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
            <h1 className="hero-banner-intro">
              <br />
              Software BugTracker for <br />
              your every project
            </h1>
          </div>

          <img src={hero} className="hero-banner-image" />
        </div>
      </section>

      {/* Section 2 */}
      <div className="nav-wrap">
        <Navbars />
      </div>

      <section className="about-app-features">
        <img src={info} className="sub-banner-image" alt="sub-banner-image" />
        <div>
          <ul className="info-list">
            <li>Submit</li>
            <li>Track </li>
            <li> Resolve Issues </li>
          </ul>
        </div>
      </section>

      <section className="about-app-features">
        <img src={info} className="sub-banner-image" alt="sub-banner-image" />
        <div>
          <ul className="info-list">
            <li>Submit</li>
            <li>Track </li>
            <li> Resolve Issues </li>
          </ul>
        </div>
      </section>
      <section className="about-app-features">
        <img src={info} className="sub-banner-image" alt="sub-banner-image" />
        <div>
          <ul className="info-list">
            <li>Submit</li>
            <li>Track </li>
            <li> Resolve Issues </li>
          </ul>
        </div>
      </section>
      <section className="about-app-features">
        <img src={info} className="sub-banner-image" alt="sub-banner-image" />
        <div>
          <ul className="info-list">
            <li>Submit</li>
            <li>Track </li>
            <li> Resolve Issues </li>
          </ul>
        </div>
      </section>

      {/* Section 3 */}
      <section className="more-app-info" id="guide">
        <div>
          <img src="" alt="demo-video" />
        </div>
        <div>
          <h4>Bug Tracking</h4>
          <p>
            It's easier to plan sprints efficiently when you use Axosoft Release
            Planner to view the capacities of your sprint, team, and team
            members and assign work accordingly.
          </p>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
