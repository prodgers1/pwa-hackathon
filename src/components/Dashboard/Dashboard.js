import React from 'react';

import { makeStyles, Button } from '@material-ui/core';
import SCOM from '../SCOM/SCOM';
import Site24x7 from '../Site24x7/Site24x7';
import BillingAgent from '../BillingAgent/BillingAgent';
import LoadBalancerList from '../LbCluster/LoadBalancerList';

const useStyles = makeStyles({
  // button: {
  //   color: '#1BDCDB',
  //   fontWeight: 'bold',
  //   border: '1px solid #1BDCDB'
  // }
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
  //       reg.showNotification("I'm a push notification!");
  //     });
  //   }
  // }

  return (
    <div className={classes.root}>
      {/* <Button className={classes.button} onClick={() => displayNotification()}>Push Alert</Button> */}
      <SCOM isDashboard={isDashboard} />
      <BillingAgent isDashboard={isDashboard} />
      <Site24x7 isDashboard={isDashboard} />
      <LoadBalancerList isDashboard={isDashboard} />
    </div>
  );
}

export default Dashboard;