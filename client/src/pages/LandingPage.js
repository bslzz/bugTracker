import React from "react";
import Navbars from "./Navbars";

import "./LandingPage.scss"

const LandingPage = () => {
  return (
    <div>
      <Navbars />
      <section className="about-app-features" id="features">
        <li>Submit</li>
        <li>Track </li>
        <li> Resolve Issues </li>
      </section>
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
