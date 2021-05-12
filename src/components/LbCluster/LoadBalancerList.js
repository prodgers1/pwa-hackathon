import React from 'react';

import { makeStyles } from '@material-ui/styles';

import { Grid } from '@material-ui/core';

import LoadBalancer from './LoadBalancer';
import dataAccessLayer from '../../data/dataAccessLayer';

const useStyles = makeStyles(() => ({
  mainContainer: {
    marginBottom: '50px',
    marginTop: '50px',
  },
}));
  
  
const LoadBalancerList = () => {
  const loadBalancers = dataAccessLayer.getLoadBalancers();

  const classes = useStyles();

  return (
    <div className={classes.mainContainer}>
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
