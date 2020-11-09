import React, { Fragment } from "react";

import "./Card.scss";

export default function Card({ children }) {
  return (
    <Fragment>
      <div className="button-container  waves">
        <div className="button-card">{children}</div>
      </div>
    </Fragment>
  );
}
