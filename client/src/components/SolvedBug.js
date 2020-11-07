import React from 'react';

export const SolvedBug = (props) => {
  const { bug, dlt } = props;

  const onClick = () => {
    dlt(bug.bug_id);
  };

  return (
    <>
      <div>
        <p className="report-fonts">
          <span>Client Username:</span> {bug.client_username}
        </p>
        <p className="report-fonts">
          <span>Project:</span> {bug.project}
        </p>
        <p className="report-fonts">
          <span>Bug:</span> {bug.bug}
        </p>
        <p className="report-fonts">
          <span>Bug Status:</span> {bug.bug_status}
        </p>
        <p className="report-fonts">
          <span>Solution:</span> {bug.solution}
        </p>
        <p className="report-fonts">
          <span>Working Employee:</span> {bug.working_emp_name}
        </p>
        <button onClick={onClick} className="admin-solution-button">
          Resolved
        </button>
      </div>
    </>
  );
};
