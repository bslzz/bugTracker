import React, { useEffect, useContext, useState, Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import { GlobalContext } from '../context/GlobalState';

import { StatusBar } from '../components/StatusBar';
import { SolvedBug } from '../components/SolvedBug';
import { UnAssignedBug } from '../components/UnassignedBug';
import { AssignedBug } from '../components/AssignedBug';
import Logo from '../components/Logo';

const Admin = () => {
  const { type, Bugs, getAllBugs, unassignBug, deleteBug } = useContext(
    GlobalContext
  );
  const [employee, setEmployee] = useState([]);

  const history = useHistory();

  useEffect(() => {
    if (type === 'employee') {
      history.push('/employee');
    } else if (type === 'client') {
      history.push('/client');
    }
    getAllBugs();
    axios.get('/api/employee').then((data) => {
      setEmployee(data.data.data);
    });
  }, []);

  const unassign = (bug_id) => {
    const body = {
      bug_id: +bug_id,
    };
    unassignBug(body);
  };

  const dlt = (bug_id) => {
    const body = {
      bug_id: +bug_id,
    };
    deleteBug(body);
  };
  const clientRegister = (e) => {
    e.preventDefault();
    history.push('/admin/clientRegister');
  };
  const employeeRegister = (e) => {
    e.preventDefault();
    history.push('/admin/employeeRegister');
  };

  return (
    <Fragment>
      <Logo />
      <StatusBar props="Admin" />
      <button onClick={clientRegister} className="registers-button">
        Client Register
      </button>
      <button onClick={employeeRegister} className="registers-button">
        Employee Register
      </button>
      <div>
        <div>
          <h3>Unassigned</h3>
          {Bugs.map(
            (bug) =>
              bug.bug_status === "unassigned" && (
                <UnAssignedBug
                  key={bug.bug_id}
                  bug={bug}
                  employees={employee}
                  dlt={dlt}
                />
              )
          )}
        </div>
        <div>
          <h3>Assigned</h3>
          {Bugs.map(
            (bug) =>
              bug.bug_status === "assigned" && (
                <AssignedBug
                  key={bug.bug_id}
                  bug={bug}
                  unassign={unassign}
                  dlt={dlt}
                />
              )
          )}
          {Bugs.map(
            (bug) =>
              bug.bug_status === "solution is given" && (
                <AssignedBug
                  key={bug.bug_id}
                  bug={bug}
                  unassign={unassign}
                  dlt={dlt}
                />
              )
          )}
        </div>
        <div>
          <h3>Solution not working</h3>
          {Bugs.map(
            (bug) =>
              bug.bug_status === "solution not working" && (
                <AssignedBug
                  key={bug.bug_id}
                  bug={bug}
                  unassign={unassign}
                  dlt={dlt}
                />
              )
          )}
        </div>
        <div>
          <h3>Solved</h3>
          {Bugs.map(
            (bug) =>
              bug.bug_status === "solved" && (
                <SolvedBug key={bug.bug_id} bug={bug} dlt={dlt} />
              )
          )}
        </div>
      </div>
      <footer className="home-footer">
        <p>© Bishal {"&"} Florence</p>
      </footer>
    </Fragment>
  );
};

export default Admin;
