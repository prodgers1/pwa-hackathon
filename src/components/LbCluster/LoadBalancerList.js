import React from 'react';

import { makeStyles } from '@material-ui/styles';

import { Grid } from '@material-ui/core';

import LoadBalancer from './LoadBalancer';
import dataAccessLayer from '../../data/dataAccessLayer';

const useStyles = makeStyles(() => ({
    mainContainer: {
        maxWidth: '300px',
    },
  }));
  
  
const LoadBalancerList = () => {
  const loadBalancers = dataAccessLayer.getLoadBalancers();

  const classes = useStyles();

  return (
    <div>
        <Grid container direction="column" item xs={2} align="center">
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
