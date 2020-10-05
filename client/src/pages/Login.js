import React, { useContext, useState } from 'react';

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
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="type">Type:</label>
          <select
            name="type"
            value={usertype}
            onChange={(e) => setUserType(e.target.value)}
          >
            <option value="admin">Admin</option>
            <option value="employee">Employee</option>
            <option value="client">Client</option>
          </select>
        </div>
        <div>
          <label htmlFor="id">Id:</label>
          <input
            type="number"
            name="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="Enter UserId..."
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="string"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password..."
          />
        </div>
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
