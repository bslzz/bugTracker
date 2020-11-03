import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';

const RegisterEmployee = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { registerEmployee } = useContext(GlobalContext);

  const employeeId = localStorage.getItem('employee_id', 'value');
  console.log(+employeeId);

  const submitForm = async (e) => {
    e.preventDefault();

    try {
      const body = { username, password };
      console.log(body);
      registerEmployee(body);
      alert(`Your id is ${+employeeId + 1}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
      <div>
        <h1>Employee Register</h1>
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

export default RegisterEmployee;
