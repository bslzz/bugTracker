import React from 'react';


import { AssignEmployee } from '../components/AssignEmployee';
import { RiDeleteBin6Fill } from "react-icons/ri";

export const UnAssignedBug = (props) => {
  const { bug, employees, dlt } = props;

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
        <div>
          <AssignEmployee employees={employees} bug_id={bug.bug_id} />
          <div onClick={onClick} className="delete-bin"><RiDeleteBin6Fill/></div>
        </div>
      </div>
    </>
  );
};
