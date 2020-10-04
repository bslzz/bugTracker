import React from 'react';
import { Router } from 'react-router-dom';

import history from './services/history';
import Routes from './routes/Index';
import { GlobalProvider } from './context/GlobalState';

const App = () => {
  return (
    <GlobalProvider>
      <Router history={history}>
        <Routes />
      </Router>
    </GlobalProvider>
  );
};

export default App;
