import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { useHistory } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { register } = useContext(GlobalContext);

  const adminId = localStorage.getItem('type_id', 'value');
  const history = useHistory();

  const submitForm = async (e) => {
    e.preventDefault();

    try {
      const body = { username, password };
      register(body);
      alert(`Your id is ${+adminId + 1}`);
      history.push('/login');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
      <div>
        <h1>Register</h1>
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

export default Register;
