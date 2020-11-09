import React, { useEffect, useContext, Fragment } from 'react';
import { useHistory } from 'react-router-dom';

import { GlobalContext } from '../../context/GlobalState';

import { StatusBar } from '../../components/StatusBar/StatusBar';
import { ReportBug } from '../../components/ReportBug/ReportBug';
import { ClientBug } from '../../components/ClientBug/ClientBug';
import BackCardClient from '../../utils/BackCard/BackCard';



const Client = () => {
  const {
    type,
    Bugs,
    getClientBugs,
    deleteBugClient,
    reportBug,
    ConfirmSolutionClient,
    DenySolutionClient,
  } = useContext(GlobalContext);

  const history = useHistory();

  useEffect(() => {
    if (type === 'employee') {
      history.push('/employee');
    } else if (type === 'admin') {
      history.push('/admin');
    }
    getClientBugs();
  }, []);

  const dlt = (bug_id) => {
    const body = {
      bug_id: +bug_id,
    };
    deleteBugClient(body);
  };

  const report = (body) => {
    reportBug(body);
  };

  const deny = (bug_id) => {
    const body = {
      bug_id: +bug_id,
    };
    DenySolutionClient(body);
  };

  const confirm = (bug_id) => {
    const body = {
      bug_id: +bug_id,
    };
    ConfirmSolutionClient(body);
  };

  return (
    <Fragment>
      <StatusBar props="Client Portal" />
      <div className="client-side-card">
        <ReportBug report={report} />
        {Bugs.map((bug) => (
          <ClientBug
            key={bug.bug_id}
            bug={bug}
            dlt={dlt}
            deny={deny}
            confirm={confirm}
          />
        ))}
      </div>
    </Fragment>
  );
};

export default Client;
