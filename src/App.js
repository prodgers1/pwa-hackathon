import React from 'react';
import { Switch, Route, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";

import './App.css';
import SCOM from './components/SCOM/SCOM';
import Header from './components/Header/Header';
import Site247 from './components/Site247/Site247';
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

  return (
    <div className="App">
      <Header/>
      <main className={classes.main}>
        <Switch>
          <Route path="/scom">
            <SCOM isDashboard={false} />
          </Route>
          <Route path="/site24x7">
            <Site247 />
          </Route>
          <Route path="/billingAgent">
            <BillingAgent isDashboard={false} />
          </Route>
          <Route path="/lbc">
            <LoadBalancerList />
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