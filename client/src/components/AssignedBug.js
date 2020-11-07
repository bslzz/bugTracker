import React from "react";
import "./StatusBar.scss";
import { RiDeleteBin6Fill } from "react-icons/ri";

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
        {/* <hr className="divider-rule" /> */}
        <div className="buttons-display">
          <button onClick={onClick} className="admin-solution-button">
            Unassign
          </button>
          {/* <button onClick={deleteClick} className="admin-solution-button"> */}

          {/* </button> */}

          <div onClick={deleteClick} className="delete-bin">
            <RiDeleteBin6Fill />
          </div>
        </div>
      </div>
    </>
  );
};
