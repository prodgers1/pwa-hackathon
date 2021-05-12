import React from 'react';
import { Card, Grid, Typography, CardContent, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  square: {
    minWidth: '200px',
    maxWidth: '200px',
    minHeight: '100px',
    maxHeight: '200px',
    overflow: 'hidden',
    margin: 'auto',
    textAlign: 'center',
  },
}));

const LoadBalancer = (props) => {
  const { loadBalancer } = props;

  const classes = useStyles();

  return (
    <Grid item>
      <Paper variant="outlined" className={classes.square}>
          <Typography gutterBottom>{loadBalancer.name}</Typography>
          <Typography>{loadBalancer.status}</Typography>
        </Paper>
    </Grid>
  );
};

export default LoadBalancer;
