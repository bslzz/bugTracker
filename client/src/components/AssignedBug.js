import React from "react";
import "./StatusBar.scss";

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
        <p className="report-fonts">
          <span>Client Username: </span>
          {bug.client_username}
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
        <div className="admin-status-form">
          <button onClick={onClick} className="admin-solution-button">
            Unassign
          </button>
          <button onClick={deleteClick} className="admin-solution-button">
            Delete
          </button>
        </div>
      </div>
    </>
  );
};
