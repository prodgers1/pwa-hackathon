import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import SCOM from '../SCOM/SCOM';
import Site24x7 from '../Site24x7/Site24x7';
import BillingAgent from '../BillingAgent/BillingAgent';
import LoadBalancerList from '../LbCluster/LoadBalancerList';

const useStyles = makeStyles({
  root: {}
});

const Dashboard = () => {
  const classes = useStyles();

  const isDashboard = true;

  // Notification.requestPermission(function (status) {
  //   console.log('Notification permission status:', status);
  // });

  // function displayNotification() {
  //   if (Notification.permission == 'granted') {
  //     navigator.serviceWorker.getRegistration().then(function (reg) {
  //       reg.showNotification('Hello world!');
  //     });
  //   }
  // }

  return (
    <div className={classes.root}>
      <SCOM isDashboard={isDashboard} />
      <BillingAgent isDashboard={isDashboard} />
      <Site24x7 isDashboard={isDashboard} />
      <LoadBalancerList isDashboard={isDashboard} />

      {/* <div>
        <button onClick={() => displayNotification()}>
          Hello
        </button>
      </div> */}
    </div>
  );
}

export default Dashboard;