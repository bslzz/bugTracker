import React, { useContext, Fragment } from "react";
import { Link } from "react-router-dom";

import "./StatusBar.scss";

import { GlobalContext } from "../context/GlobalState";
import Logo from "./Logo";

export const StatusBar = (props) => {
  const { logOut } = useContext(GlobalContext);

  const heading = props.props;

  const onClick = () => {
    logOut();
  };

  return (
    <Fragment>
      <nav className="backend-nav">
        <header className="backend-nav-wrapper">
          <h1>{heading}</h1>
          <Logo />
          <Link onClick={onClick} to="#" className="logout-button">
            Log Out
          </Link>
        </header>
      </nav>
    </Fragment>
  );
};
