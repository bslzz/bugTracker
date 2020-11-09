import React, { Fragment } from 'react';

import "./ReportCard.scss";

const ReportCard = ({children}) => {
    return (
      <Fragment>
        <div className="report-card-container">
          <div className="report-card">{children}</div>
        </div>
      </Fragment>
    );
}

export default ReportCard;
