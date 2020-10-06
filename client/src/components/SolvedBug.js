import React from 'react';

export const SolvedBug = (props) => {
  const { bug, dlt } = props;

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
        <p>
          <span>Working Employee:</span> {bug.working_emp_name}
        </p>
        <button onClick={onClick}>Delete</button>
      </div>
    </>
  );
};
