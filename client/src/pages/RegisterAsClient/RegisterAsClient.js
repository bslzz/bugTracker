import React, { Fragment, useContext, useState } from "react";
import Logo from "../../components/Logo/Logo";
import { useHistory } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";

import Card from "./../../utils/Cards/Card";

const RegisterClient = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { registerClient } = useContext(GlobalContext);
  const history = useHistory();

  const admin = () => {
    history.push("/admin");
  };

  const clientId = localStorage.getItem("client_id", "value");

  const submitForm = async (e) => {
    e.preventDefault();

    try {
      const body = { username, password };
      console.log(body);
      registerClient(body);
      alert(`Your id is ${+clientId + 1}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Fragment>
      <Logo />
      <Card>
        <form onSubmit={submitForm} className="register-form">
          <h2 className="login-message">Register Client </h2>
          <div>
            <label htmlFor="exampleText" className="type-text">
              Username :
            </label>
            <div>
              <input
                className="input-text"
                type="text"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label htmlFor="exampleInputPassword1" className="type-text">
              Password :
            </label>
            <div>
              <input
                className="input-text"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <button type="submit" className="registers-button">
            Register
          </button>
          <p className="login-reminder" onClick={admin}>
            Back to Admin
          </p>
          <p className="terms-conditions">
            By signing, you agree to the <br />
            <b style={{ color: "#fc4463", cursor: "pointer" }}>
              Terms and Conditions
            </b>{" "}
            of this
            <b
              style={{
                color: "#fc4463",
                padding: "3px",
                cursor: "pointer",
              }}
            >
              Enrolment Agreement.
            </b>
          </p>
        </form>
      </Card>
      <footer className="home-footer">
        <p>© Bishal {"&"} Florence</p>
      </footer>
    </Fragment>
  );
};

export default RegisterClient;
