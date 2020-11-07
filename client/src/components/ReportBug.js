import React, { Fragment, useContext, useState } from 'react';

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
    <Fragment>
      <div className="unassigned-card">
        <form onSubmit={onSubmit} className="report-form">
          <div>
            <label htmlFor="id">Project:</label>
            <div className="report-head">
              <input
                className="option-input-report"
                type="string"
                name="project"
                value={project}
                onChange={(e) => setProject(e.target.value)}
                placeholder="Enter the name of project..."
              />
            </div>
          </div>
          <div>
            <label htmlFor="password">Bug:</label>
            <div className="report-head">
              <input
                className="option-input-report"
                type="string"
                name="Bug"
                value={bug}
                onChange={(e) => setBug(e.target.value)}
                placeholder="Enter The bug..."
              />
            </div>
          </div>
          <button className="admin-report-bug">Report Bug</button>
        </form>
      </div>
    </Fragment>
  );
};
