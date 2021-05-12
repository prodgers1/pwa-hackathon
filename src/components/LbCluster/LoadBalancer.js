import React from 'react';
import { Grid, Typography, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  square: {
    minWidth: '200px',
    maxWidth: '200px',
    minHeight: '100px',
    maxHeight: '200px',
    overflow: 'hidden',
    textAlign: 'center',
    borderRadius: '10% / 50%',
  },
  serverName: {
      fontWeight: 'bold',
  },
  statusText: {
      fontSize: '3em',
      fontWeight: 'bold',
      fontFamily: 'Tahoma'
  },
  fullThrottle: {
      color: '#117A65',
  },
  halfBaked: {
    color: '#C0392B',
  },  

}));

const LoadBalancer = (props) => {
  const { loadBalancer } = props;
  const classes = useStyles();
  const statusClass = loadBalancer.status === 'A' ? classes.fullThrottle : classes.halfBaked;

  return (
    <Grid item>
      <Paper variant="outlined" elevation={3} className={classes.square}>
        <Typography color="textSecondary" className={classes.serverName}>{loadBalancer.name}</Typography>
        <Typography className={classes.statusText + ' ' + statusClass}>{loadBalancer.status}</Typography>
      </Paper>
    </Grid>
  )
};

export default LoadBalancer;
