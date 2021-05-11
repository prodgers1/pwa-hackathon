import React from 'react';

import logo from './logo.svg';
import './App.css';

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
      <LoadBalancerList />
    </div>
  );
}

export default App;
