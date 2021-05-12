import React from 'react';
import { Switch, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core";

import './App.css';
import SCOM from './components/SCOM/SCOM';
import Header from './components/Header/Header';
import Site24x7 from './components/Site24x7/Site24x7';
import Dashboard from './components/Dashboard/Dashboard';
import BillingAgent from './components/BillingAgent/BillingAgent';
import LoadBalancerList from './components/LbCluster/LoadBalancerList';


const useStyles = makeStyles(() => ({
  main: {
    marginTop: '4.5em'
  },
}));

function App() {
  const classes = useStyles();
  const isDashboard = false;

  return (
    <div className="App">
      <Header/>
      <main className={classes.main}>
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
            <LoadBalancerList isDashboard={isDashboard} />
          </Route>
          <Route path="/">
            <Dashboard />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;