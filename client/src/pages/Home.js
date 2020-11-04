import React, { Fragment } from 'react';
import { useHistory, Link } from 'react-router-dom';


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
          {/* <h4 className="register-head">REGISTER AS ADMIN</h4> */}
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
        </div>
      </div>
      <footer className="home-footer">
        <p>© Bishal {"&"} Florence</p>
      </footer>
  
    </Fragment>
  );
};

export default Home;
