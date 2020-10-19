import React from "react";

export const AssignedBug = (props) => {
  const { bug, unassign, dlt } = props;

  const onClick = () => {
    unassign(bug.bug_id);
  };

  const deleteClick = () => {
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
        <button onClick={onClick}>Unassign</button>
        <button onClick={deleteClick}>Delete</button>
      </div>
    </>
  );
};
