import React from 'react';
import { useHistory } from 'react-router-dom';

import "./Home.scss"
import { Container } from "react-bootstrap";

const Home = () => {
  const history = useHistory();
  const login = () => {
    history.push('/login');
  };

  const register = () => {
    history.push('/register');
  };
  return (
    <>
      <Container>
        <div className="button-container">
          <div className="button-card">
            {/* <h4 className="register-head">REGISTER AS ADMIN</h4> */}
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
            <p className="register-message">
              This email will be your username to login
            </p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
