import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

const initialState = {
  LoggedIn: false,
  type: '',
  token: '',
  user_id: '',
  username: '',
  error: null,
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  async function logIn(body) {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const data = await axios.post('/api/login', body, config);
      const payload = {
        type: data.data.type,
        token: data.data.token,
        username: data.data.username,
        user_id: body.id,
      };

      localStorage.setItem('type', data.data.type);
      localStorage.setItem('token', data.data.token);
      localStorage.setItem('username', data.data.username);
      localStorage.setItem('user_id', body.id);

      dispatch({
        type: 'LOG_IN',
        payload: payload,
      });
    } catch (err) {
      dispatch({
        type: 'ERROR',
        payload: err.response.data.error,
      });
    }
  }

  async function loadCache() {
    try {
      if (localStorage.getItem('token')) {
        const payload = {
          token: localStorage.getItem('token'),
          type: localStorage.getItem('type'),
          username: localStorage.getItem('username'),
          user_id: localStorage.getItem('user_id'),
        };

        dispatch({
          type: 'LOG_IN',
          payload: payload,
        });
      } else {
        console.log('nothing load in cache');
        return false;
      }
    } catch (err) {
      dispatch({
        type: 'ERROR',
        payload: err.response.data.error,
      });
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        LoggedIn: state.LoggedIn,
        type: state.type,
        token: state.token,
        user_id: state.user_id,
        username: state.username,
        error: state.error,
        loadCache,
        logIn,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
