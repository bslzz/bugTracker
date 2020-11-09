import React, { Fragment } from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";

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
            <p className="report-fonts">
              <span>Working Employee: </span> {bug.working_emp_name}
            </p>
          )}
          {bug.bug_status === "solution is given" && (
            <div>
              <p className="report-fonts">
                <span>Solution:</span> {bug.solution}
              </p>
              <div className="client-button-wrapper">
                <button onClick={denyClick} className="admin-report-bug">
                  Deny
                </button>
                <button onClick={confirmClick} className="admin-report-bug">
                  Confirm
                </button>
              </div>
            </div>
          )}
          {bug.bug_status === "solved" && (
            <p>
              <span className="bug__titles">Solution:</span> {bug.solution}
            </p>
          )}
          {bug.bug_status === "solution not working" && (
            <p>
              <span>Solution:</span> {bug.solution}
            </p>
          )}
          <div onClick={deleteClick} className="delete-bin-client">
            <RiDeleteBin6Fill />
          </div>
        </div>
      </div>
    </Fragment>
  );
};
