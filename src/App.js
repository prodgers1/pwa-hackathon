import React from 'react';

import './App.css';

import Site247 from './components/Site247/Site247';
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
      <Site247 />
      {/* <div>
        <button onClick={() => displayNotification()}>
          Hello
        </button>
      </div> */}

      <LoadBalancerList />
    </div>
  );
}

export default App;
