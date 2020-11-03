import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { GlobalContext } from '../context/GlobalState';

export const StatusBar = (props) => {
  const { logOut } = useContext(GlobalContext);

  const heading = props.props;

  const onClick = () => {
    logOut();
  };

  return (
    <div className="statusbar">
      <h1 className="statusbar__heading">{heading}</h1>
      <Link onClick={onClick} className="statusbar_logout" to="#">
        Log Out
      </Link>
    </div>
  );
};
