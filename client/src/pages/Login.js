import React, { Fragment, useContext, useState } from "react";
import { useHistory} from "react-router-dom";
import "./Login.scss";

import { GlobalContext } from "../context/GlobalState";
import Logo from "../components/Logo";

const Login = () => {
  
  const [id, setId] = useState("");
  const [usertype, setUserType] = useState("admin");
  const [password, setPassword] = useState("");

  const { logIn } = useContext(GlobalContext);
   const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("logging in");
    const body = {
      id: +id,
      password,
      type: usertype,
    };
    logIn(body);
  };

  const login = () => {
    history.push("/login");
  };

  const register = () => {
    history.push("/register");
  };

  return (
    <Fragment>
      <Logo />
      <div className="page-container waves">
        <div className="test">
          <form onSubmit={onSubmit} className="form-container">
            <p className="login-message">Login to your account</p>

            <div>
              <label htmlFor="type" className="type-text">
                Type:
              </label>
              <div>
                <select
                  className="option-input"
                  name="type"
                  value={usertype}
                  onChange={(e) => setUserType(e.target.value)}
                >
                  <option value="client">Client</option>
                  <option value="admin">Admin</option>
                  <option value="employee">Employee</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="id" className="type-text">
                Id:
              </label>
              <div>
                <input
                  className="option-input"
                  type="number"
                  name="id"
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                  placeholder="Enter UserId..."
                />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="type-text">
                Password:
              </label>
              <div>
                <input
                  className="option-input"
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter Password..."
                />
              </div>
            </div>
            <button className="logins-button" onClick={login}>
              Login
            </button>

            <p className="create-reminder" onClick={register}>
              Register
            </p>
            <p className="terms-conditions">
              By signing below, you agree to the <br />
              <b style={{ color: "#fc4463", cursor: "pointer" }}>
                Terms and Conditions
              </b>{" "}
              of this
              <b
                style={{ color: "#fc4463", padding: "3px", cursor: "pointer" }}
              >
                Enrolment Agreement.
              </b>
            </p>
          </form>
        </div>
      </div>
      <footer className="home-footer">
        <p> © 2020 Buggy. Made by Bishal {"&"} Florence.</p>
      </footer>
    </Fragment>
  );
};

export default Login;
