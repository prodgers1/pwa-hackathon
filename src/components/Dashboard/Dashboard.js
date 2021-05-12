import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import SCOM from '../SCOM/SCOM';
import Site247 from '../Site247/Site247';
import BillingAgent from '../BillingAgent/BillingAgent';
import LoadBalancerList from '../LbCluster/LoadBalancerList';

const useStyles = makeStyles({
  root: {}
});

const Dashboard = () => {
  const classes = useStyles();

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
      <SCOM isDashboard={true} />
      <BillingAgent isDashboard={true} />
      <Site247 />
      <LoadBalancerList isDashboard={true} />

      {/* <div>
        <button onClick={() => displayNotification()}>
          Hello
        </button>
      </div> */}
    </div>
  );
}

export default Dashboard;