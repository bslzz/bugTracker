import React, { useEffect, useContext } from 'react';

import { Switch } from 'react-router-dom';
import Route from './Route';

import { GlobalContext } from '../context/GlobalState';

import Home from './../pages/Home/Home';
import Login from './../pages/Login/Login';
import Admin from './../pages/Admin/Admin';
import Employee from './../pages/Employee/Employee';
import Client from './../pages/Client/Client';
import Register from './../pages/Register/Register';
import RegisterClient from './../pages/RegisterAsClient/RegisterAsClient';
import RegisterEmployee from './../pages/RegisterAsEmployee/RegisterAsEmployee';
import LandingPage from './../pages/LandingPage/LandingPage';


export default function Routes() {
  const { loadCache } = useContext(GlobalContext);

  useEffect(() => {
    loadCache();
  }, []);

  return (
    <Switch>
      <Route path="/" exact component={LandingPage} />

      <Route path="/login" component={Login} />

      <Route path="/register" component={Register} />

      <Route
        path="/admin/clientRegister"
        component={RegisterClient}
        isPrivate
      />
      <Route
        path="/admin/employeeRegister"
        component={RegisterEmployee}
        isPrivate
      />

      <Route path="/admin" component={Admin} isPrivate />

      <Route path="/employee" component={Employee} isPrivate />

      <Route path="/client" component={Client} isPrivate />

      {/* redirect user to SignIn page if route does not exist and user is not authenticated */}
      <Route component={Home} />
    </Switch>
  );
}
