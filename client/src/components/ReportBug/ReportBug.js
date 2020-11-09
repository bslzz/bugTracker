import React, { Fragment, useContext, useState } from "react";

import { GlobalContext } from "../../context/GlobalState";
import ReportCard from "../../utils/ReportCard/ReportCard";

export const ReportBug = (props) => {
  const { user_id, username } = useContext(GlobalContext);

  const [project, setProject] = useState("");
  const [bug, setBug] = useState("");

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
      <ReportCard>
        <form onSubmit={onSubmit} className="register-form">
          <div>
            <label htmlFor="id" className="type-text">
              <p>Project:</p>
            </label>
            <div>
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
            <label htmlFor="password" className="type-text">
              <p>Bug:</p>
            </label>
            <div>
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
      </ReportCard>
    </Fragment>
  );
};
