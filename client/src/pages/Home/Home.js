import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";

import "./Home.scss";
import Logo from "../../components/Logo/Logo";
import Card from "../../utils/Cards/Card";

const Home = () => {
  const history = useHistory();
  const login = () => {
    history.push("/login");
  };

  const register = () => {
    history.push("/register");
  };
  return (
    <Fragment>
      <Logo />
      <Card>
        <p className="register-message">
          This email will be your username to login
        </p>
        <div className="button-wrapper">
          <button onClick={login} className="login-button">
            Login
          </button>
          <button onClick={register} className="register-button">
            Register As Admin
          </button>
        </div>
        <p className="terms-conditions">
          By signing, you agree to the <br />
          <b style={{ color: "#fc4463", cursor: "pointer" }}>
            Terms and Conditions
          </b>
          of this
          <b style={{ color: "#fc4463", padding: "3px", cursor: "pointer" }}>
            Enrolment Agreement.
          </b>
        </p>
      </Card>

      <p className="copyright">© 2020 Buggy. Made by Bishal {"&"} Florence.</p>
    </Fragment>
  );
};

export default Home;
