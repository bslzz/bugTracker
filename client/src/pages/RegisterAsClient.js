import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';

const RegisterClient = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { registerClient } = useContext(GlobalContext);

  const clientId = JSON.parse(localStorage.getItem('type_id') + 1);

  const submitForm = async (e) => {
    e.preventDefault();

    try {
      const body = { username, password };
      registerClient(body);
      alert(`Your id is ${clientId}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
      <div>
        <h1>Client Register</h1>
      </div>
      <div>
        <div>
          <div>
            <form onSubmit={submitForm}>
              <div>
                <label htmlFor="exampleText">Username</label>
                <input
                  type="text"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button type="submit">Register</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterClient;
