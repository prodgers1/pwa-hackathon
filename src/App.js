import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import SCOM from './components/SCOM/SCOM';
import Site24x7 from './components/Site24x7/Site24x7';
import Dashboard from './components/Dashboard/Dashboard';
import BillingAgent from './components/BillingAgent/BillingAgent';
import LoadBalancerList from './components/LbCluster/LoadBalancerList';

function App() {

  const isDashboard = false;

  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/scom">SCOM</Link>
            </li>
            <li>
              <Link to="/site24x7">Site24x7</Link>
            </li>
            <li>
              <Link to="/billingAgent">Billing Agent</Link>
            </li>
            <li>
              <Link to="/lbc">LBC</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/scom">
            <SCOM isDashboard={isDashboard} />
          </Route>
          <Route path="/site24x7">
            <Site24x7 isDashboard={isDashboard} />
          </Route>
          <Route path="/billingAgent">
            <BillingAgent isDashboard={isDashboard} />
          </Route>
          <Route path="/lbc">
            <LoadBalancerList isDashboard={false} />
          </Route>
          <Route path="/">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;