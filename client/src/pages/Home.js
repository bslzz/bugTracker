import React from 'react';
import { useHistory } from 'react-router-dom';

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
      <button onClick={login}>Login</button>
      <button onClick={register}>Register As Admin</button>
    </>
  );
};

export default Home;
