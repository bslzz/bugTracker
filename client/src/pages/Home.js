import React, { Fragment } from 'react';
import { useHistory} from 'react-router-dom';


import "./Home.scss"
import Logo from '../components/Logo';

const Home = () => {
  const history = useHistory();
  const login = () => {
    history.push('/login');
  };

  const register = () => {
    history.push('/register');
  };
  return (
    <Fragment>
      <Logo />
      <div className="button-container">
        <div className="button-card">
          <p className="register-message">
            This email will be your username to login
          </p>
          <div className="button-wrapper">
            <div>
              <button onClick={login} className="login-button">
                Login
              </button>
            </div>
            <div>
              <button onClick={register} className="register-button">
                Register As Admin
              </button>
            </div>
          </div>
          <p className="terms-conditions">
            By signing below, you agree to the <br />
            <b style={{ color: "#fc4463", cursor: "pointer" }}>
              Terms and Conditions
            </b>{" "}
            of this
            <b style={{ color: "#fc4463", padding: "3px", cursor: "pointer" }}>
              Enrolment Agreement.
            </b>
          </p>
        </div>
      </div>
      <footer className="home-footer">
        <p>© Bishal {"&"} Florence</p>
      </footer>
    </Fragment>
  );
};

export default Home;
