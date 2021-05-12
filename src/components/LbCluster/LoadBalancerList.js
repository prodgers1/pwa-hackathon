import React from 'react';

import { makeStyles } from '@material-ui/styles';

import { Grid, Typography } from '@material-ui/core';

import LoadBalancer from './LoadBalancer';
import dataAccessLayer from '../../data/dataAccessLayer';

const useStyles = makeStyles(() => ({
  mainContainer: {
    paddingTop: '1em',
    marginBottom: '3em',
    marginTop: '3em',
    marginLeft: '1em',
    marginRight: '1em',
    backgroundColor: '#404040',
    borderRadius: '5px',
  },
  grayText: {
    color: '#eeeeee',
  },
}));
  
  
const LoadBalancerList = () => {
  const loadBalancers = dataAccessLayer.getLoadBalancers();

  const classes = useStyles();

  return (
    <div className={classes.mainContainer}>
      <h1 className={classes.grayText}>Load Balancer Clusters</h1>
      <Grid container direction="row" justify="center" alignItems="center" spacing={5}>
        {loadBalancers.map((lb, i) => (
          <React.Fragment key={i}>
            <LoadBalancer loadBalancer={lb} />
          </React.Fragment>
        ))}
      </Grid>
    </div>
  );
};

export default LoadBalancerList;
