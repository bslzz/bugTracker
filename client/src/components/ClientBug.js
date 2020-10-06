import React from 'react';

export const ClientBug = (props) => {
  const { bug, dlt, deny, confirm } = props;

  const deleteClick = () => {
    dlt(bug.bug_id);
  };

  const denyClick = () => {
    deny(bug.bug_id);
  };

  const confirmClick = () => {
    confirm(bug.bug_id);
  };

  return (
    <>
      <div>
        <p>
          <span>Project:</span> {bug.project}
        </p>
        <p>
          <span>Bug:</span> {bug.bug}
        </p>
        <p>
          <span>Bug Status:</span> {bug.bug_status}
        </p>
        {bug.bug_status !== 'unassigned' && (
          <p>
            <span>Working Employee:</span> {bug.working_emp_name}
          </p>
        )}
        {bug.bug_status === 'solution is given' && (
          <div>
            <p>
              <span>Solution:</span> {bug.solution}
            </p>
            <button onClick={denyClick}>Deny</button>
            <button onClick={confirmClick}>Confirm</button>
          </div>
        )}
        {bug.bug_status === 'solved' && (
          <p>
            <span>Solution:</span> {bug.solution}
          </p>
        )}
        {bug.bug_status === 'solution not working' && (
          <p>
            <span>Solution:</span> {bug.solution}
          </p>
        )}
        <button onClick={deleteClick}>Delete</button>
      </div>
    </>
  );
};
