import React from 'react';

import './App.css';
import SCOM from './components/SCOM/SCOM';
import Site247 from './components/Site247/Site247';
import BillingAgent from './components/BillingAgent/BillingAgent';
import LoadBalancerList from './components/LbCluster/LoadBalancerList';

function App() {
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
    <div className="App">
      <SCOM isDashboard={true} />
      <SCOM isDashboard={false} />
      <Site247 />
      <BillingAgent isDashboard={true} />
      <BillingAgent isDashboard={false} />
      <LoadBalancerList />
      {/* <div>
        <button onClick={() => displayNotification()}>
          Hello
        </button>
      </div> */}
    </div>
  );
}

export default App;
