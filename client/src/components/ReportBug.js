import React, { useContext, useState } from 'react';

import { GlobalContext } from '../context/GlobalState';

export const ReportBug = (props) => {
  const { user_id, username } = useContext(GlobalContext);

  const [project, setProject] = useState('');
  const [bug, setBug] = useState('');

  const { report } = props;

  const onSubmit = (e) => {
    e.preventDefault();
    const body = {
      client_id: +user_id,
      client_username: username,
      project,
      bug,
    };
    console.log(body);
    report(body);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="id">Project:</label>
          <input
            type="string"
            name="project"
            value={project}
            onChange={(e) => setProject(e.target.value)}
            placeholder="Enter the name of project..."
          />
        </div>
        <div>
          <label htmlFor="password">Bug:</label>
          <input
            type="string"
            name="Bug"
            value={bug}
            onChange={(e) => setBug(e.target.value)}
            placeholder="Enter The bug..."
          />
        </div>
        <button>Report Bug</button>
      </form>
    </div>
  );
};
