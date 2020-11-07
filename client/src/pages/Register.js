import React, { Fragment, useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import { useHistory } from "react-router-dom";
import "./Register.scss";
import Logo from "../components/Logo";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { register } = useContext(GlobalContext);

  const adminId = localStorage.getItem("type_id", "value");
  const history = useHistory();

  const login = () => {
    history.push("/login");
  };

  const submitForm = async (e) => {
    e.preventDefault();

    try {
      const body = { username, password };
      register(body);
      alert(`Your id is ${+adminId + 1}`);
      history.push("/login");
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
            <p className="login-message">Register Admin account</p>
            <div>
              <label htmlFor="exampleText">Company Email :</label>
              <div>
                <input
                  className="input-text"
                  type="text"
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="buggy@gmail.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="exampleText">Username :</label>
              <div>
                <input
                  className="input-text"
                  type="text"
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="admin"
                />
              </div>
            </div>

            <div>
              <label htmlFor="exampleInputPassword1">Password :</label>
              <div>
                <input
                  className="input-text"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="password"
                />
              </div>
            </div>

            <button type="submit" className="registers-button">
              Register As Admin
            </button>
            <p className="login-reminder" onClick={login}>
              Login
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
        <p>© Bishal {"&"} Florence</p>
      </footer>
    </Fragment>
  );
};

export default Register;
