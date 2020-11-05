import React from "react";
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
import analytics from "./../assets/analytics.svg";
import assign from "./../assets/assign.svg";
import search from "./../assets/search.svg";
import statistics from "./../assets/statistics.svg";

import "./LandingPage.scss";
import Logo from "../components/Logo";

const LandingPage = () => {
  return (
    <div>
      {/* Hero banner */}
      <div className="hero-background">
        <Logo />
        <section className="hero-banner-container">
          <div className="content-wrapper">
            <div className="content-wrapper-inner">
              <h1 className="hero-banner-intro">
                <br />
                Software BugTracker for your every project
              </h1>
              <Link to="/features">
                <button className="call-to-action">SignUp</button>
              </Link>
            </div>

            <img src={hero} className="hero-banner-image" />
          </div>
        </section>
      </div>

      {/* Section 2 */}
      <div className="nav-wrap">
        <Navbars />
      </div>
      <section className="about-app-features">
        <div>
          <h2 className="product-features">Features</h2>
          <div className="more-leads-wrap">
            <p className="more-leads">
              Sourcetree simplifies how you interact with your Git repositories
              so you can focus on coding. Visualize and manage your repositories
              through Sourcetree's simple Git GUI.
            </p>
          </div>
          {/* <img src={info} className="sub-banner-image" alt="sub-banner-image" /> */}
          <div className="features-wrapper">
            <ul className="info-list">
              <li>Submit</li>
              <li>Track </li>
              <li> Resolve Issues </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="product-section-wrap">
        <h2 className="product-features">Products</h2>
        <div className="bug-trackers">
          <img src={info} className="sub-banner-image" alt="sub-banner-image" />

          <div className="support-message">
            <h2>BUG TRACKING</h2>
            <span> It's easier to plan sprints efficiently</span>
            <span>when you use BlahBlaHbLAH</span>
            <span>
              Planner to view the capacities of your sprint, team, and team
            </span>
            <span>members and assign work accordingly.</span>
            <h2>FIND OUT HOW IT WORKS</h2>
            <span> It's easier to plan sprints efficiently</span>
            <span>when you use BlahBlaHbLAH</span>
            <span>
              Planner to view the capacities of your sprint, team, and team
            </span>
            <span>members and assign work accordingly.</span>
          </div>
        </div>
      </section>

      {/* Section 5 */}
      <section className="bug-icons">
        <div>
          <h2 className="sub-heads">Bug Tracking</h2>
          <div className="featured-works">
            <img
              src={analytics}
              className="featured-works-image"
              alt="featured-works-image"
            />

            <img
              src={assign}
              className="featured-works-image"
              alt="featured-works-image"
            />
            <img
              src={search}
              className="featured-works-image"
              alt="featured-works-image"
            />
            <img
              src={statistics}
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
            <li>About</li>
            <li>Products</li>
            <li>Documentation</li>
            <li>Blog</li>
          </ul>
          <ul>
            <li>More Features</li>
            <li>Customers</li>
            <li>Support</li>
            <li>Tutorials</li>
          </ul>
          <div>
            <h4>Connect with us</h4>

            <FaFacebook className="sm-icons" />
            <AiFillTwitterCircle className="sm-icons" />
            <SiLinkedin className="sm-icons" />
          </div>
        </div>

        <p className="copyright">
          © 2020 Buggy. Made by Bishal {"&"} Florence.
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
