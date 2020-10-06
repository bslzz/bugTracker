import React from 'react';

import { AssignEmployee } from '../components/AssignEmployee';

export const UnAssignedBug = (props) => {
  const { bug, employees, dlt } = props;

  const onClick = () => {
    dlt(bug.bug_id);
  };

  return (
    <>
      <div>
        <p>
          <span>Client Username:</span> {bug.client_username}
        </p>
        <p>
          <span>Project:</span> {bug.project}
        </p>
        <p>
          <span>Bug:</span> {bug.bug}
        </p>
        <p>
          <span>Bug Status:</span> {bug.bug_status}
        </p>
        <p>
          <span>Solution:</span> {bug.solution}
        </p>
        <AssignEmployee employees={employees} bug_id={bug.bug_id} />
        <button onClick={onClick}>Delete</button>
      </div>
    </>
  );
};
