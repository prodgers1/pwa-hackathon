import React from 'react';
import logo from './logo.svg';
import './App.css';
import SCOM from './components/SCOM/SCOM';
import Site247 from './components/Site247/Site247';
import BillingAgent from './components/BillingAgent/BillingAgent';

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
      <SCOM />
      <Site247 />
      {/* <div>
        <button onClick={() => displayNotification()}>
          Hello
        </button>
      </div> */}
      <BillingAgent isDashboard={true} />
    </div>
  );
}

export default App;
