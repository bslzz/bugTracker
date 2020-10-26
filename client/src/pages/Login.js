import React, { useContext, useState } from 'react';
import './Login.scss';


import { GlobalContext } from '../context/GlobalState';

const Login = () => {
  const [id, setId] = useState('');
  const [usertype, setUserType] = useState('admin');
  const [password, setPassword] = useState('');

  const { logIn } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('logging in');
    const body = {
      id: +id,
      password,
      type: usertype,
    };
    logIn(body);
  };

  return (
    <div className="page-container">
      <div className="test">
        {/* <h2 className="login-heads">Login</h2> */}
        <form onSubmit={onSubmit} className="form-container">
          {/* <div className="form-wrapper"> */}
          {/* <div> */}
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
                <option value="admin">Admin</option>
                <option value="employee">Employee</option>
                <option value="client">Client</option>
              </select>
            </div>
          </div>

          {/* </div> */}
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
          <button className="logins-button">Login</button>
          {/* </div> */}
        </form>
      </div>
    </div>
  );
};

export default Login;
