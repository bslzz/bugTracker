import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { GlobalContext } from '../context/GlobalState';

import { StatusBar } from '../components/StatusBar';
import { EmployeeBug } from '../components/EmployeeBug';

const Employee = () => {
  const { type, Bugs, getAssignedBugEmployee, giveSolution } = useContext(
    GlobalContext
  );

  const history = useHistory();

  useEffect(() => {
    if (type === 'client') {
      history.push('/client');
    } else if (type === 'admin') {
      history.push('/admin');
    }
    getAssignedBugEmployee();
  }, []);

  const solve = (body) => {
    giveSolution(body);
  };

  return (
    <>
      <StatusBar props="Employee" />
      <div>
        {Bugs.map((bug) => (
          <EmployeeBug key={bug.bug_id} bug={bug} solve={solve} />
        ))}
      </div>
    </>
  );
};

export default Employee;
