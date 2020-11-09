import React, { useState } from "react";

export const EmployeeBug = (props) => {
  const { bug, solve } = props;

  const [solution, setSolution] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const body = {
      bug_id: bug.bug_id,
      solution,
    };
    solve(body);
  };

  return (
    <>
      <div>
        <p className="report-fonts">
          <span>Project:</span> {bug.project}
        </p>
        <p className="report-fonts">
          <span>Client: </span>
          {bug.client_username}
        </p>
        <p className="report-fonts">
          <span>Bug: </span>
          {bug.bug}
        </p>
        <p className="report-fonts">
          <span>Bug Status:</span> {bug.bug_status}
        </p>
        {bug.bug_status === "solution is given" && (
          <p className="report-fonts">
            <span>Status:</span> {bug.solution}
          </p>
        )}
        {bug.bug_status === "solution not working" && (
          <p>
            <span className="bug__titles">Previous Solution:</span>{' '}
            {bug.solution}
          </p>
        )}
        <div>
          <form onSubmit={onSubmit} className="status-form">
            {/* <input
              type="string"
              name="solution"
              value={solution}
              onChange={(e) => setSolution(e.target.value)}
              placeholder="Enter the solution for the bug..."
            /> */}

            <span>
              <select
                className="option-input-solution"
                name="type"
                value={solution}
                onChange={(e) => setSolution(e.target.value)}
              >
                <option value="other">-- Choose status --</option>
                <option value="progress">In Progress</option>
                <option value="review">Review </option>
                <option value="solved">Solved</option>
              </select>
            </span>
            <button className="solution-button">Confirm status</button>
          </form>
        </div>
      </div>
      <footer className="home-footer">
        <p>© Bishal {"&"} Florence</p>
      </footer>
    </>
  );
};
