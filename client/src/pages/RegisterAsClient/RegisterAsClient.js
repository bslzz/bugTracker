import React, { Fragment, useContext, useState } from "react";
import Logo from "../../components/Logo/Logo";
import { useHistory } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";

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
      <div className="register-form-wrapper">
        <div className="register-container">
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
          </form>
        </div>
      </div>
      <footer className="home-footer">
        <p>© Bishal {"&"} Florence</p>
      </footer>
    </Fragment>
  );
};

export default RegisterClient;
