import React, { useEffect, useContext,Fragment } from 'react';
import { useHistory } from 'react-router-dom';

import { GlobalContext } from '../../context/GlobalState';

import { StatusBar } from '../../components/StatusBar/StatusBar';
import { EmployeeBug } from '../../components/EmployeeBug/EmployeeBug';

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
    <Fragment>
      <StatusBar props="Employee Portal" />
      <div className="unassigned-card">
        {Bugs.map((bug) => (
          <EmployeeBug key={bug.bug_id} bug={bug} solve={solve} />
        ))}
      </div>
    </Fragment>
  );
};

export default Employee;
