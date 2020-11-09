import React, { useContext, Fragment } from "react";
import { Link, useHistory } from "react-router-dom";

import "./../StatusBar/StatusBar.scss";

import { GlobalContext } from "../../context/GlobalState";

export const StatusBarAdmin = (props) => {
  const { logOut } = useContext(GlobalContext);

  const heading = props.props;
  const history = useHistory();

  const clientRegister = (e) => {
    e.preventDefault();
    history.push("/admin/clientRegister");
  };
  const employeeRegister = (e) => {
    e.preventDefault();
    history.push("/admin/employeeRegister");
  };

  const onClick = () => {
    logOut();
  };

  return (
    <Fragment>
      <nav className="backend-nav">
        <header className="backend-nav-wrapper">
          <ul>
            <h1>{heading}</h1>
          </ul>

          <ul className="backend-nav-item">
            <Link to="#" onClick={clientRegister} className="admin-button">
              Register Client
            </Link>
            <Link to="#"  onClick={employeeRegister} className="admin-button">
              Register Employee
            </Link>
            <Link onClick={onClick} to="#" className="logout-button">
              Log Out
            </Link>
          </ul>
        </header>
      </nav>
    </Fragment>
  );
};
