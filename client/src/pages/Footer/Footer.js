import React, { Fragment } from "react";

import "./../Footer/Footer.scss";
//icons
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle, AiFillGithub } from "react-icons/ai";
import { SiLinkedin } from "react-icons/si";

const Footer = () => {
  return (
    <Fragment>
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
          <div className="connect">
            <h4>Connect with us</h4>

            <FaFacebook className="sm-icons" />
            <AiFillTwitterCircle className="sm-icons" />
            <SiLinkedin className="sm-icons" />
            <AiFillGithub className="sm-icons" />
          </div>
        </div>
      </footer>
      <p className="copyright">© 2020 Buggy. Made by Bishal {"&"} Florence.</p>
    </Fragment>
  );
};

export default Footer;
