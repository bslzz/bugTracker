import React, { Fragment } from 'react';

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
    <Fragment>
      <div className="unassigned-card">
        <div>
          <p className="report-fonts">
            <span>Project:</span> {bug.project}
          </p>
          <p className="report-fonts">
            <span>Bug:</span> {bug.bug}
          </p>
          <p className="report-fonts">
            <span>Bug Status:</span> {bug.bug_status}
          </p>
          {bug.bug_status !== "unassigned" && (
            <p>
              <span>Working Employee:</span> {bug.working_emp_name}
            </p>
          )}
          {bug.bug_status === "solution is given" && (
            <div>
              <p>
                <span>Solution:</span> {bug.solution}
              </p>
              <button onClick={denyClick}>Deny</button>
              <button onClick={confirmClick}>Confirm</button>
            </div>
          )}
          {bug.bug_status === "solved" && (
            <p>
              <span>Solution:</span> {bug.solution}
            </p>
          )}
          {bug.bug_status === "solution not working" && (
            <p>
              <span>Solution:</span> {bug.solution}
            </p>
          )}
          <button onClick={deleteClick} className="admin-report-bug">
            Delete
          </button>
        </div>
      </div>
    </Fragment>
  );
};
