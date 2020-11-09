import React, { Fragment } from "react";
import Navbars from "../Navbar/Navbars";
import { Link } from "react-router-dom";

//assets
import hero from "../../assets/land.svg";
import info from "../../assets/info.svg";
import analytics from "../../assets/analytics.svg";
import assign from "../../assets/assign.svg";
import search from "../../assets/search.svg";
import statistics from "../../assets/statistics.svg";

import "./LandingPage.scss";
import Logo from "../../components/Logo/Logo";
import Footer from "../Footer/Footer";

const LandingPage = () => {
  return (
    <Fragment>
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
                <button className="call-to-action">Get Started</button>
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
      <section className="product-section-wrap section-2">
        <h2 className="product-features">Product Guide</h2>
        <div className="bug-trackers">
          <img src={info} className="sub-banner-image" alt="sub-banner-image" />

          <div className="support-message">
            <h4>BUG TRACKING</h4>
            <span> It's easier to plan sprints efficiently</span>
            <span>when you use BUGGY</span>
            <span>
              Planner to view the capacities of your sprint, team, and team
            </span>
            <span>members and assign work accordingly.</span>
            <h4>FIND OUT HOW IT WORKS</h4>
            <span> It's easier to plan sprints efficiently</span>
            <span>when you use BUGGY</span>
            <span>
              Planner to view the capacities of your sprint, team, and team
            </span>
            <span>members and assign work accordingly.</span>
          </div>
        </div>

        {/* Section 5 */}
        <h2 className="product-features-develop">Develop Faster</h2>
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
      </section>

      {/* Footer */}

      <Footer/>
    </Fragment>
  );
};

export default LandingPage;
