import React from 'react';
import { Grid, Typography, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  square: {
    paddingTop: '.5em',
    minWidth: '200px',
    maxWidth: '200px',
    minHeight: '100px',
    maxHeight: '200px',
    overflow: 'hidden',
    textAlign: 'center',
    borderRadius: '10% / 50%',
    border: '6px solid black',
    backgroundColor: '#F8F9F9',
  },
  serverName: {
    fontWeight: 'bold',
    color: '#212F3D',
  },
  statusText: {
    fontSize: '3em',
    fontWeight: 'bold',
    fontFamily: 'Tahoma',
  },
  fullThrottle: {
    color: '#117A65',
  },
  halfBaked: {
    color: '#C0392B',
  },
  smallText: {
      fontSize: '.8em',
  }
}));

const LoadBalancer = (props) => {
  const { loadBalancer, isDashboard } = props;
  const classes = useStyles();
  const statusClass = loadBalancer.status === 'A' ? classes.fullThrottle : classes.halfBaked;

  return (
    <Grid item>
      <Paper variant="outlined" elevation={3} className={classes.square}>
        <Typography className={classes.serverName}>{loadBalancer.name}</Typography>
        <Typography className={classes.statusText + ' ' + statusClass}>{loadBalancer.status}</Typography>

        {!isDashboard && (
          <Grid item container display="row" justify="space-around" alignItems="center">
            <Grid item>
              <Typography align="left" paragraph className={classes.smallText}>
                cap: {loadBalancer.capacity}
              </Typography>
            </Grid>
            <Grid item>
              <Typography align="right" paragraph className={classes.smallText}>
                cnc: {loadBalancer.connections}
              </Typography>
            </Grid>
          </Grid>
        )}
      </Paper>
    </Grid>
  );
};

export default LoadBalancer;
