import React, { useState } from 'react';

export const EmployeeBug = (props) => {
  const { bug, solve } = props;

  const [solution, setSolution] = useState('');

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
        <p>
          <span>Project:</span> {bug.project}
        </p>
        <p>
          <span>Client:</span>
          {bug.client_username}
        </p>
        <p>
          <span>Bug:</span> {bug.bug}
        </p>
        <p>
          <span>Bug Status:</span> {bug.bug_status}
        </p>
        {bug.bug_status === 'solution is given' && (
          <p>
            <span>Given Solution:</span> {bug.solution}
          </p>
        )}
        {bug.bug_status === 'solution not working' && (
          <p>
            <span>Previous Solution:</span> {bug.solution}
          </p>
        )}
        <div>
          <form onSubmit={onSubmit}>
            <input
              type="string"
              name="solution"
              value={solution}
              onChange={(e) => setSolution(e.target.value)}
              placeholder="Enter the solution for the bug..."
            />
            <button>Give Solution</button>
          </form>
        </div>
      </div>
    </>
  );
};
